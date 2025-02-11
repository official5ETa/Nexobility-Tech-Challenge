import { Controller, Post, Body, Delete, Param, Get, Query } from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { PaginationDto } from './dto/pagination.dto';
import { SortDto } from './dto/sort.dto';
import { IncidentService } from './incident.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { TIncident } from '../../../models/tincident.schema';

@Controller('incident')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}

  @Get('all')
  async findAll(
    @Query() pagination: PaginationDto,
    @Query() filter: FilterDto,
    @Query() sort: SortDto,
  ) {
    return await this.incidentService.findAllIncidents(pagination, filter, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TIncident> {
    return await this.incidentService.findIncidentById(id);
  }
  
  @Post()
  async createIncident(@Body() createIncidentDto: CreateIncidentDto): Promise<TIncident> {
    return await this.incidentService.createIncident(createIncidentDto);
  }

  @Delete(':id')
  async deleteIncident(@Param('id') id: string): Promise<void> {
    return await this.incidentService.deleteIncident(id);
  }
}
