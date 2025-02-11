import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TIncident } from '../../../models/tincident.schema';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { TAddress } from '../../../models/taddress.schema';
import { TSuspect } from '../../../models/tsuspect.schema';
import { TVehicle } from '../../../models/tvehicle.schema';

@Injectable()
export class IncidentService {
  constructor(
    @InjectModel(TIncident.name) private readonly incidentModel: Model<TIncident>,
    @InjectModel(TAddress.name) private readonly addressModel: Model<TAddress>,
    @InjectModel(TSuspect.name) private readonly suspectModel: Model<TSuspect>,
    @InjectModel(TVehicle.name) private readonly vehicleModel: Model<TVehicle>,
  ) {}

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
