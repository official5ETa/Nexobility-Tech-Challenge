import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class TAddress extends Document {
  @Prop({ required: true })
  street!: string;

  @Prop()
  house_number!: string;

  @Prop({ required: true })
  city!: string;

  @Prop({ required: true })
  zip_code!: string;

  @Prop({ required: true })
  country!: string;
}

export const TAddressSchema = SchemaFactory.createForClass(TAddress);
