export interface ProductPriceCreateDTO {
  currency: string;
  price: number;
}

export interface ProductPriceUpdateDTO {
  currency?: string;
  price?: number;
}
