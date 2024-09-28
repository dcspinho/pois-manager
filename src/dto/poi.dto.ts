export interface POICreateDTO {
  status: string;
  country: string;
  zipCode: string;
  street: string;
  houseNumber: string;
  openingHoursId: number;
}

export interface POIUpdateDTO {
  status?: string;
  country?: string;
  zipCode?: string;
  street?: string;
  houseNumber?: string;
  openingHoursId: number;
}
