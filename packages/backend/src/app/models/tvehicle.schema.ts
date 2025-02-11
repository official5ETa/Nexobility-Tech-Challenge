import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TVehicle extends Document {
  @Prop({ required: true, enum: ['kleinkraftrad', 'motorrad', 'kleinstwagen', 'kombi', 'suv', 'pickup', 'lkw'] })
  type!: string;

  @Prop()
  license_plate!: string;

  @Prop()
  color!: string;

  @Prop()
  additional_info?: string;
}

export const TVehicleSchema = SchemaFactory.createForClass(TVehicle);
