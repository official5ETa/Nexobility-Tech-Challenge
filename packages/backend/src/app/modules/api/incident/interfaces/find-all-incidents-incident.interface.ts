export interface FindAllIncidentsIncident {
  _id: string;
  date: Date;
  value: number;
  address: {
    street: string;
    house_number: string;
    city: string;
    zip_code: string;
    country: string;
  };
  licensePlate: string;
}
