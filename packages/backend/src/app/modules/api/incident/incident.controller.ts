import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { IncidentService } from './incident.service';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { TIncident } from '../../../models/tincident.schema';

@Controller('incidents')
export class IncidentController {
  constructor(private readonly incidentService: IncidentService) {}

  @Post()
  async createIncident(@Body() createIncidentDto: CreateIncidentDto): Promise<TIncident> {
    return await this.incidentService.createIncident(createIncidentDto);
  }

  @Delete(':id')
  async deleteIncident(@Param('id') id: string): Promise<void> {
    return await this.incidentService.deleteIncident(id);
  }
}
