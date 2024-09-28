import { AppDataSource } from '../../src/ormconfig';
import * as fuelProductService from '../../src/services/fuelProduct.service';
import { FuelProductCreateDTO } from '../../src/dto/fuelProduct.dto';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('Fuel Product Service', () => {
  it('should create a new fuel product', async () => {
    const newFuelProduct: FuelProductCreateDTO = {
      productName: 'Diesel',
      productPrice: 1,
    };

    const createdFuelProduct =
      await fuelProductService.createFuelProduct(newFuelProduct);
    expect(createdFuelProduct).toHaveProperty('productId');
    expect(createdFuelProduct.productName).toBe('Diesel');
  });

  it('should retrieve all fuel products', async () => {
    const products = await fuelProductService.getAllFuelProducts();
    expect(products.length).toBeGreaterThan(0);
  });

  it('should update an existing fuel product', async () => {
    const updatedFuelProduct = await fuelProductService.updateFuelProduct(1, {
      productName: 'Super Diesel',
    });
    expect(updatedFuelProduct.productName).toBe('Super Diesel');
  });
});
