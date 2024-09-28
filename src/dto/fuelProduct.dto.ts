export interface FuelProductCreateDTO {
  productName: string;
  productPrice: number;
}

export interface FuelProductUpdateDTO {
  productName?: string;
  productPrice?: number;
}
