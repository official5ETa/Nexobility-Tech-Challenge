import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { IncidentController } from './incident/incident.controller';
import { IncidentService } from './incident/incident.service';

@Module({
  controllers: [ApiController, IncidentController],
  providers: [IncidentService],
})
export class ApiModule {}
