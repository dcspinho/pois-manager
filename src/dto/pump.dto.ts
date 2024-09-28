export interface PumpCreateDTO {
  pumpId?: string;
  pumpName: string;
  poiId: number;
  fuelProductId: number;
}

export interface PumpUpdateDTO {
  pumpId?: string;
  pumpName?: string;
  poiId?: number;
  fuelProductId?: number;
}
