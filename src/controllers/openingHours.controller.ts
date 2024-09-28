import { Request, Response } from 'express';
import * as openingHoursService from '../services/openingHours.service';
import {
  OpeningHoursCreateDTO,
  OpeningHoursUpdateDTO,
} from '../dto/openingHours.dto';

export const getOpeningHours = async (req: Request, res: Response) => {
  try {
    const openingHours = await openingHoursService.getAllOpeningHours();
    res.status(200).json(openingHours);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching opening hours', error });
  }
};

export const createOpeningHours = async (req: Request, res: Response) => {
  try {
    const openingHoursData: OpeningHoursCreateDTO = req.body;
    const newOpeningHours =
      await openingHoursService.createOpeningHours(openingHoursData);
    res.status(201).json(newOpeningHours);
  } catch (error) {
    res.status(500).json({ message: 'Error creating opening hours', error });
  }
};

export const updateOpeningHours = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const openingHoursData: OpeningHoursUpdateDTO = req.body;
    const updatedOpeningHours = await openingHoursService.updateOpeningHours(
      id,
      openingHoursData
    );
    res.status(200).json(updatedOpeningHours);
  } catch (error) {
    res.status(500).json({ message: 'Error updating opening hours', error });
  }
};

export const deleteOpeningHours = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await openingHoursService.deleteOpeningHours(id);
    res.status(200).json({ message: 'Opening hours deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting opening hours', error });
  }
};
