import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TSuspect extends Document {
  @Prop({ required: true, enum: ['männlich', 'weiblich'] })
  gender?: string;

  @Prop({ required: true, enum: ['klein', 'normal', 'groß', 'sehr groß'] })
  height?: string;

  @Prop({ required: true, enum: ['dünn', 'schlank', 'gewichtig', 'kräftig'] })
  build?: string;

  @Prop({ type: [String], default: [] })
  features: string[] = [];

  @Prop()
  additional_info?: string;

  @Prop({ type: [String] })
  images: string[] = [];
}

export const TSuspectSchema = SchemaFactory.createForClass(TSuspect);
