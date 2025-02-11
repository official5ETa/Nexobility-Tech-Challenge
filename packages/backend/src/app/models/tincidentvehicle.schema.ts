import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class TIncidentVehicle extends Document {
  @Prop({ type: Types.ObjectId, ref: 'TIncident', required: true })
  incident_id!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'TVehicle', required: true })
  vehicle_id!: Types.ObjectId;
}

export const TIncidentVehicleSchema = SchemaFactory.createForClass(TIncidentVehicle);
