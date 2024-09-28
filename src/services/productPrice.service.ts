import { AppDataSource } from '../ormconfig';
import { ProductPrice } from '../models/productPrice';
import { CurrencyRate } from '../models/currencyRate';
import {
  ProductPriceCreateDTO,
  ProductPriceUpdateDTO,
} from '../dto/productPrice.dto';

export const getAllProductPrices = async (): Promise<ProductPrice[]> => {
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);
  return await productPriceRepository.find({ relations: ['currency'] }); // Include currency relation
};

export const createProductPrice = async (
  productPriceData: ProductPriceCreateDTO
): Promise<ProductPrice> => {
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);
  const currencyRateRepository = AppDataSource.getRepository(CurrencyRate);

  // Find the associated currency rate by currency code
  const currencyRate = await currencyRateRepository.findOne({
    where: { currency: productPriceData.currency },
  });

  if (!currencyRate) {
    throw new Error('Currency rate not found');
  }

  const productPrice = productPriceRepository.create({
    price: productPriceData.price,
    currency: currencyRate,
  });

  return await productPriceRepository.save(productPrice);
};

export const updateProductPrice = async (
  productPriceId: number,
  productPriceData: ProductPriceUpdateDTO
): Promise<ProductPrice> => {
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);
  const currencyRateRepository = AppDataSource.getRepository(CurrencyRate);

  const productPrice = await productPriceRepository.findOne({
    where: { productPriceId },
    relations: ['currency'],
  });
  if (!productPrice) throw new Error('Product Price not found');

  let currencyRate: CurrencyRate | undefined;
  if (productPriceData.currency) {
    const currencyRate: CurrencyRate | undefined | null =
      await currencyRateRepository.findOne({
        where: { currency: productPriceData.currency },
      });

    if (!currencyRate) {
      throw new Error('Currency rate not found');
    }
  }

  productPriceRepository.merge(productPrice, {
    price: productPriceData.price,
    currency: currencyRate || productPrice.currency,
  });

  return await productPriceRepository.save(productPrice);
};

export const deleteProductPrice = async (
  productPriceId: number
): Promise<void> => {
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);
  const result = await productPriceRepository.delete(productPriceId);
  if (result.affected === 0) throw new Error('Product Price not found');
};
