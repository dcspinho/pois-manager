import { Request, Response } from 'express';
import * as poiService from '../services/poi.service';
import { POICreateDTO, POIUpdateDTO } from '../dto/poi.dto';

export const getPOIs = async (req: Request, res: Response) => {
  try {
    const pois = await poiService.getAllPOIs();
    res.status(200).json(pois);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching POIs', error });
  }
};

export const createPOI = async (req: Request, res: Response) => {
  try {
    const poiData: POICreateDTO = req.body;
    const newPOI = await poiService.createPOI(poiData);
    res.status(201).json(newPOI);
  } catch (error) {
    res.status(500).json({ message: 'Error creating POI', error });
  }
};

export const updatePOI = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const poiData: POIUpdateDTO = req.body;
    const updatedPOI = await poiService.updatePOI(id, poiData);
    res.status(200).json(updatedPOI);
  } catch (error) {
    res.status(500).json({ message: 'Error updating POI', error });
  }
};

export const deletePOI = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    // TODO: also delete pumps by poiId
    await poiService.deletePOI(id);
    res.status(200).json({ message: 'POI deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting POI', error });
  }
};
