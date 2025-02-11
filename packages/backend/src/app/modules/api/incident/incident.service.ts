import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TIncident } from '../../../models/tincident.schema';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { TAddress } from '../../../models/taddress.schema';
import { TSuspect } from '../../../models/tsuspect.schema';
import { TVehicle } from '../../../models/tvehicle.schema';
import { FilterDto } from './dto/filter.dto';
import { PaginationDto } from './dto/pagination.dto';
import { SortDto } from './dto/sort.dto';
import { FindAllIncidentsIncident } from './interfaces/find-all-incidents-incident.interface';

@Injectable()
export class IncidentService {
  constructor(
    @InjectModel(TIncident.name) private readonly incidentModel: Model<TIncident>,
    @InjectModel(TAddress.name) private readonly addressModel: Model<TAddress>,
    @InjectModel(TSuspect.name) private readonly suspectModel: Model<TSuspect>,
    @InjectModel(TVehicle.name) private readonly vehicleModel: Model<TVehicle>,
  ) {}

  async findAllIncidents(pagination: PaginationDto, filter: FilterDto = {}, sort: SortDto = {}): Promise<FindAllIncidentsIncident[]> {
    const { page, limit } = pagination;
    const skip = (page - 1) * limit;

    const query = this.incidentModel.aggregate([
      {
        $lookup: {
          from: 'taddresses',
          localField: 'address_id',
          foreignField: '_id',
          as: 'address',
        },
      },
      {
        $unwind: '$address',
      },
      {
        $lookup: {
          from: 'tvehicles',
          localField: 'vehicles',
          foreignField: '_id',
          as: 'vehicles',
        },
      },
      {
        $project: {
          _id: 1,
          date: 1,
          value: 1,
          location: {
            street: '$address.street',
            house_number: '$address.house_number',
            city: '$address.city',
            zip_code: '$address.zip_code',
            country: '$address.country',
          },
          licensePlate: { $arrayElemAt: ['$vehicles.licensePlate', 0] },
        },
      },
      {
        $match: filter,
      },
      {
        $sort: sort as Record<string, 1 | -1>,
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
    ]);

    return query.exec();
  }

  async findIncidentById(id: string): Promise<TIncident> {
    const incident = await this.incidentModel.findById(id)
      .populate('address_id')
      .populate('suspects')
      .populate('vehicles')
      .exec();

    if (!incident) {
      throw new NotFoundException(`Incident with ID ${id} not found`);
    }

    return incident;
  }

  async createIncident(createIncidentDto: CreateIncidentDto): Promise<TIncident> {
    let savedAddress = await this.addressModel.findOne(createIncidentDto.address);
    if (!savedAddress) {
      const address = new this.addressModel(createIncidentDto.address);
      savedAddress = await address.save();
    }

    const suspectDocs = await this.suspectModel.insertMany(createIncidentDto.suspects);
    const suspectIds = suspectDocs.map(suspect => suspect._id);

    const vehicleDocs = await this.vehicleModel.insertMany(createIncidentDto.vehicles);
    const vehicleIds = vehicleDocs.map(vehicle => vehicle._id);

    const newIncident = new this.incidentModel({
      date: createIncidentDto.date,
      value: createIncidentDto.value,
      description: createIncidentDto.description,
      files: createIncidentDto.files,
      address_id: savedAddress._id,
      suspects: suspectIds,
      vehicles: vehicleIds,
    });

    return newIncident.save();
  }

  async deleteIncident(id: string): Promise<void> {
    await this.incidentModel.findByIdAndDelete(id).exec();
  }
}
