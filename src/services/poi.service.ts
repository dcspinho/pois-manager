import { AppDataSource } from '../ormconfig';
import { POI } from '../models/poi';
import { POICreateDTO, POIUpdateDTO } from '../dto/poi.dto';

export const getAllPOIs = async (): Promise<POI[]> => {
  const poiRepository = AppDataSource.getRepository(POI);
  return await poiRepository.find();
};

export const createPOI = async (poiData: POICreateDTO): Promise<POI> => {
  const poiRepository = AppDataSource.getRepository(POI);
  const poi = poiRepository.create(poiData);
  return await poiRepository.save(poi);
};

export const updatePOI = async (
  id: number,
  poiData: POIUpdateDTO
): Promise<POI> => {
  const poiRepository = AppDataSource.getRepository(POI);
  const poi = await poiRepository.findOne({ where: { poiId: id } });
  if (!poi) throw new Error('POI not found');
  poiRepository.merge(poi, poiData);
  return await poiRepository.save(poi);
};

export const deletePOI = async (id: number): Promise<void> => {
  const poiRepository = AppDataSource.getRepository(POI);
  const result = await poiRepository.delete(id);
  if (result.affected === 0) throw new Error('POI not found');
};
