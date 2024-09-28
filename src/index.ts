import 'reflect-metadata';
import express, { Request, Response } from 'express';
import { AppDataSource } from './ormconfig';

import dotenv from 'dotenv';
import cors from 'cors';

import * as poiController from './controllers/poi.controller';
import * as fuelProductController from './controllers/fuelProduct.controller';
import * as pumpController from './controllers/pump.controller';
import * as productPriceController from './controllers/productPrice.controller';
import * as openingHoursController from './controllers/openingHours.controller';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database connection using TypeORM
AppDataSource.initialize()
  .then(() => {
    console.log('Connected to the database');

    app.get('/pois', poiController.getPOIs);
    app.post('/pois', poiController.createPOI);
    app.put('/pois/:id', poiController.updatePOI);
    app.delete('/pois/:id', poiController.deletePOI);

    app.get('/fuel-products', fuelProductController.getFuelProducts);
    app.post('/fuel-products', fuelProductController.createFuelProduct);
    app.put('/fuel-products/:id', fuelProductController.updateFuelProduct);
    app.delete('/fuel-products/:id', fuelProductController.deleteFuelProduct);

    app.get('/pumps', pumpController.getAllPumps);
    app.post('/pumps', pumpController.createPump);
    app.put('/pumps/:id', pumpController.updatePump);
    app.delete('/pumps/:id', pumpController.deletePump);

    app.get('/product-prices', productPriceController.getAllProductPrices);
    app.post('/product-prices', productPriceController.createProductPrice);
    app.put('/product-prices/:id', productPriceController.updateProductPrice);
    app.delete(
      '/product-prices/:id',
      productPriceController.deleteProductPrice
    );

    app.get('/opening-hours', openingHoursController.getOpeningHours);
    app.post('/opening-hours', openingHoursController.createOpeningHours);
    app.put('/opening-hours/:id', openingHoursController.updateOpeningHours);
    app.delete('/opening-hours/:id', openingHoursController.deleteOpeningHours);

    app.use((err: Error, req: Request, res: Response) => {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Database connection error: ', error));

export default app;
