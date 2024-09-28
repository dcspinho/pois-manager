import { AppDataSource } from '../ormconfig';
import { Pump } from '../models/pump';
import { PumpCreateDTO, PumpUpdateDTO } from '../dto/pump.dto';

export const getAllPumps = async (): Promise<Pump[]> => {
  const pumpRepository = AppDataSource.getRepository(Pump);
  return await pumpRepository.find();
};

export const createPump = async (pumpData: PumpCreateDTO): Promise<Pump> => {
  const pumpRepository = AppDataSource.getRepository(Pump);
  const pump = pumpRepository.create(pumpData);
  return await pumpRepository.save(pump);
};

export const updatePump = async (
  id: string,
  pumpData: PumpUpdateDTO
): Promise<Pump> => {
  const pumpRepository = AppDataSource.getRepository(Pump);
  const pump = await pumpRepository.findOne({ where: { pumpId: id } });
  if (!pump) throw new Error('Pump not found');
  pumpRepository.merge(pump, pumpData);
  return await pumpRepository.save(pump);
};

export const deletePump = async (id: string): Promise<void> => {
  const pumpRepository = AppDataSource.getRepository(Pump);
  const result = await pumpRepository.delete(id);
  if (result.affected === 0) throw new Error('Pump not found');
};
