import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class TIncident extends Document {
  @Prop({ required: true })
  date!: Date;

  @Prop({ required: true })
  value!: number;

  @Prop()
  description?: string;

  @Prop({ type: [String] })
  files: string[] = [];

  @Prop({ type: Types.ObjectId, ref: 'TAddress' })
  address_id!: Types.ObjectId;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'TSuspect' }] })
  suspects!: Types.ObjectId[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'TVehicle' }] })
  vehicles!: Types.ObjectId[];
}

export const TIncidentSchema = SchemaFactory.createForClass(TIncident);
