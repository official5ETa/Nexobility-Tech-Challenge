export interface FindAllIncidentsIncident {
  _id: string;
  date: Date;
  value: number;
  location: {
    street: string;
    house_number: string;
    city: string;
    zip_code: string;
    country: string;
  };
  licensePlate: string;
}
