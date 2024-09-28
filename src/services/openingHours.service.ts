import { AppDataSource } from '../ormconfig';
import { OpeningHours } from '../models/openingHours';
import {
  OpeningHoursCreateDTO,
  OpeningHoursUpdateDTO,
} from '../dto/openingHours.dto';

export const getAllOpeningHours = async (): Promise<OpeningHours[]> => {
  const openingHoursRepository = AppDataSource.getRepository(OpeningHours);
  return await openingHoursRepository.find();
};

export const createOpeningHours = async (
  openingHoursData: OpeningHoursCreateDTO
): Promise<OpeningHours> => {
  const openingHoursRepository = AppDataSource.getRepository(OpeningHours);
  const openingHours = openingHoursRepository.create(openingHoursData);
  return await openingHoursRepository.save(openingHours);
};

export const updateOpeningHours = async (
  id: number,
  openingHoursData: OpeningHoursUpdateDTO
): Promise<OpeningHours> => {
  const openingHoursRepository = AppDataSource.getRepository(OpeningHours);
  const openingHours = await openingHoursRepository.findOne({
    where: { scheduleId: id },
  });
  if (!openingHours) throw new Error('Opening hours not found');
  openingHoursRepository.merge(openingHours, openingHoursData);
  return await openingHoursRepository.save(openingHours);
};

export const deleteOpeningHours = async (id: number): Promise<void> => {
  const openingHoursRepository = AppDataSource.getRepository(OpeningHours);
  const result = await openingHoursRepository.delete(id);
  if (result.affected === 0) throw new Error('Opening hours not found');
};
