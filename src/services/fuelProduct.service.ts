import { AppDataSource } from '../ormconfig';
import { FuelProduct } from '../models/fuelProduct';
import {
  FuelProductCreateDTO,
  FuelProductUpdateDTO,
} from '../dto/fuelProduct.dto';
import { ProductPrice } from '../models/productPrice';

export const getAllFuelProducts = async (): Promise<FuelProduct[]> => {
  const fuelProductRepository = AppDataSource.getRepository(FuelProduct);
  return await fuelProductRepository.find();
};

export const createFuelProduct = async (
  fuelProductData: FuelProductCreateDTO
): Promise<FuelProduct> => {
  const fuelProductRepository = AppDataSource.getRepository(FuelProduct);
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);

  // Fetch the related ProductPrice entity
  const productPrice = await productPriceRepository.findOne({
    where: { productPriceId: fuelProductData.productPrice },
  });

  if (!productPrice) {
    throw new Error('Product Price not found');
  }

  const fuelProduct = fuelProductRepository.create({
    productName: fuelProductData.productName,
    productPrice: productPrice, // Use the ProductPrice entity
  });

  return await fuelProductRepository.save(fuelProduct);
};

export const updateFuelProduct = async (
  id: number,
  fuelProductData: FuelProductUpdateDTO
): Promise<FuelProduct> => {
  const fuelProductRepository = AppDataSource.getRepository(FuelProduct);
  const productPriceRepository = AppDataSource.getRepository(ProductPrice);

  const fuelProduct = await fuelProductRepository.findOne({
    where: { productId: id },
  });
  if (!fuelProduct) throw new Error('Fuel Product not found');

  let productPrice: ProductPrice | undefined;
  if (fuelProductData.productPrice) {
    const productPrice: ProductPrice | undefined | null =
      await productPriceRepository.findOne({
        where: { productPriceId: fuelProductData.productPrice },
      });

    if (!productPrice) throw new Error('Product Price not found');
  }

  fuelProductRepository.merge(fuelProduct, {
    productName: fuelProductData.productName,
    productPrice: productPrice || fuelProduct.productPrice,
  });

  return await fuelProductRepository.save(fuelProduct);
};

export const deleteFuelProduct = async (id: number): Promise<void> => {
  const fuelProductRepository = AppDataSource.getRepository(FuelProduct);
  const result = await fuelProductRepository.delete(id);
  if (result.affected === 0) throw new Error('Fuel Product not found');
};
