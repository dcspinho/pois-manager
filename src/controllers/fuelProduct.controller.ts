import { Request, Response } from 'express';
import * as fuelProductService from '../services/fuelProduct.service';
import {
  FuelProductCreateDTO,
  FuelProductUpdateDTO,
} from '../dto/fuelProduct.dto';

export const getFuelProducts = async (req: Request, res: Response) => {
  try {
    const fuelProducts = await fuelProductService.getAllFuelProducts();
    res.status(200).json(fuelProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fuel products', error });
  }
};

export const createFuelProduct = async (req: Request, res: Response) => {
  try {
    const fuelProductData: FuelProductCreateDTO = req.body;
    const newFuelProduct =
      await fuelProductService.createFuelProduct(fuelProductData);
    res.status(201).json(newFuelProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating fuel product', error });
  }
};

export const updateFuelProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const fuelProductData: FuelProductUpdateDTO = req.body;
    const updatedFuelProduct = await fuelProductService.updateFuelProduct(
      id,
      fuelProductData
    );
    res.status(200).json(updatedFuelProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating fuel product', error });
  }
};

export const deleteFuelProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await fuelProductService.deleteFuelProduct(id);
    res.status(200).json({ message: 'Fuel product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting fuel product', error });
  }
};
