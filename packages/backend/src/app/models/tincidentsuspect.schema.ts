import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class TIncidentSuspect extends Document {
  @Prop({ type: Types.ObjectId, ref: 'TIncident', required: true })
  incident_id!: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'TSuspect', required: true })
  suspect_id!: Types.ObjectId;
}

export const TIncidentSuspectSchema = SchemaFactory.createForClass(TIncidentSuspect);
