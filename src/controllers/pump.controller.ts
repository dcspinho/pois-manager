import { Request, Response } from 'express';
import * as pumpService from '../services/pump.service';
import { PumpCreateDTO, PumpUpdateDTO } from '../dto/pump.dto';

export const getAllPumps = async (req: Request, res: Response) => {
  try {
    const pumps = await pumpService.getAllPumps();
    res.status(200).json(pumps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pumps', error });
  }
};

export const createPump = async (req: Request, res: Response) => {
  try {
    const pumpData: PumpCreateDTO = req.body;
    const newPump = await pumpService.createPump(pumpData);
    res.status(201).json(newPump);
  } catch (error) {
    res.status(500).json({ message: 'Error creating pump', error });
  }
};

export const updatePump = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const pumpData: PumpUpdateDTO = req.body;
    const updatedPump = await pumpService.updatePump(id, pumpData);
    res.status(200).json(updatedPump);
  } catch (error) {
    res.status(500).json({ message: 'Error updating pump', error });
  }
};

export const deletePump = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await pumpService.deletePump(id);
    res.status(200).json({ message: 'Pump deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting pump', error });
  }
};
