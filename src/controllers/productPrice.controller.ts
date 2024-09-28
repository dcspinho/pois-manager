import { Request, Response } from 'express';
import * as productPriceService from '../services/productPrice.service';
import {
  ProductPriceCreateDTO,
  ProductPriceUpdateDTO,
} from '../dto/productPrice.dto';

export const getAllProductPrices = async (req: Request, res: Response) => {
  try {
    const productPrices = await productPriceService.getAllProductPrices();
    res.status(200).json(productPrices);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product prices', error });
  }
};

export const createProductPrice = async (req: Request, res: Response) => {
  try {
    const productPriceData: ProductPriceCreateDTO = req.body;
    const newProductPrice =
      await productPriceService.createProductPrice(productPriceData);
    res.status(201).json(newProductPrice);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product price', error });
  }
};

export const updateProductPrice = async (req: Request, res: Response) => {
  try {
    const productPriceId = parseInt(req.params.id);
    const productPriceData: ProductPriceUpdateDTO = req.body;
    const updatedProductPrice = await productPriceService.updateProductPrice(
      productPriceId,
      productPriceData
    );
    res.status(200).json(updatedProductPrice);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product price', error });
  }
};

export const deleteProductPrice = async (req: Request, res: Response) => {
  try {
    const productPriceId = parseInt(req.params.id);
    await productPriceService.deleteProductPrice(productPriceId);
    res.status(200).json({ message: 'Product price deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product price', error });
  }
};
