import request from 'supertest';
import { AppDataSource } from '../../src/ormconfig';
import app from '../../src/index';

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe('POI Controller', () => {
  it('should create a new POI via POST /pois', async () => {
    const response = await request(app).post('/pois').send({
      status: 'ONLINE',
      country: 'Portugal',
      zipCode: '3800-000',
      street: 'Main Street',
      houseNumber: '123',
      openingHoursId: '1',
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('poiId');
    expect(response.body.status).toBe('ONLINE');
  });

  it('should retrieve all POIs via GET /pois', async () => {
    const response = await request(app).get('/pois');
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should update a POI via PUT /pois/:id', async () => {
    const response = await request(app)
      .put('/pois/1')
      .send({ status: 'OFFLINE' });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OFFLINE');
  });
});
