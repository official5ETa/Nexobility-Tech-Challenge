import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentService } from './incident.service';
import { IncidentController } from './incident.controller';
import { TIncident, TIncidentSchema } from '../../../models/tincident.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TIncident.name, schema: TIncidentSchema }]),
  ],
  controllers: [IncidentController],
  providers: [IncidentService],
})
export class IncidentModule {}
