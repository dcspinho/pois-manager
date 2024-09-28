export interface OpeningHoursCreateDTO {
  weekDay: number;
  openTime: string;
  closeTime: string;
  holiday?: boolean;
}

export interface OpeningHoursUpdateDTO {
  weekDay?: number;
  openTime?: string;
  closeTime?: string;
  holiday?: boolean;
}
