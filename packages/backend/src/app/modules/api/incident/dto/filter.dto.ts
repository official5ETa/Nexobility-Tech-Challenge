export class FilterDto {
  date?: Date | { $gte?: Date; $lte?: Date };
  value?: number | { $gte?: number; $lte?: number };
  'location.street'?: string;
  'location.house_number'?: string;
  'location.city'?: string;
  'location.zip_code'?: string;
  'location.country'?: string;
  licensePlate?: string;
}
