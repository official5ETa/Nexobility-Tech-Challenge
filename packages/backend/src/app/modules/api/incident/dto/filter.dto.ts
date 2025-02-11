export class FilterDto {
  date?: Date | { $gte?: Date; $lte?: Date };
  value?: number | { $gte?: number; $lte?: number };
  'address.street'?: string;
  'address.house_number'?: string;
  'address.city'?: string;
  'address.zip_code'?: string;
  'address.country'?: string;
  licensePlate?: string;
}
