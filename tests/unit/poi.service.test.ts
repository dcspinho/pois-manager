import { AppDataSource } from '../../src/ormconfig';
import * as poiService from '../../src/services/poi.service';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('POI Service', () => {
  it('should create a new POI', async () => {
    const newPOI = {
      status: 'ONLINE',
      country: 'Portugal',
      zipCode: '3800-000',
      street: 'Main Street',
      houseNumber: '123',
      openingHoursId: '1',
    };

    const createdPOI = await poiService.createPOI(newPOI);
    expect(createdPOI).toHaveProperty('poiId');
    expect(createdPOI.status).toBe('ONLINE');
  });

  it('should retrieve all POIs', async () => {
    const pois = await poiService.getAllPOIs();
    expect(pois.length).toBeGreaterThan(0);
  });

  it('should update an existing POI', async () => {
    const updatedPOI = await poiService.updatePOI(1, { status: 'OFFLINE' });
    expect(updatedPOI.status).toBe('OFFLINE');
  });
});
