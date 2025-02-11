import { IsString, IsDate, IsOptional, IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

class AddressDto {
  @IsString()
  street!: string;

  @IsString()
  house_number!: string;

  @IsString()
  city!: string;

  @IsString()
  zip_code!: string;

  @IsString()
  country!: string;
}

class SuspectDto {
  @IsString()
  gender?: string;

  @IsString()
  height?: string;

  @IsString()
  build?: string;

  @IsArray()
  features: string[] = [];

  @IsString()
  @IsOptional()
  additional_info?: string;

  @IsArray()
  @IsOptional()
  images: string[] = [];
}

class VehicleDto {
  @IsString()
  type!: string;

  @IsString()
  @IsOptional()
  license_plate!: string;

  @IsString()
  @IsOptional()
  color!: string;

  @IsString()
  @IsOptional()
  additional_info?: string;
}

export class CreateIncidentDto {
  @IsDate()
  date!: Date;

  @ValidateNested()
  @Type(() => AddressDto)
  address!: AddressDto;

  @IsNumber()
  value!: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  files: string[] = [];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SuspectDto)
  suspects!: SuspectDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VehicleDto)
  vehicles!: VehicleDto[];
}
