import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { POI } from './poi';
import { FuelProduct } from './fuelProduct';

@Entity('pump')
export class Pump {
  @PrimaryGeneratedColumn({ name: 'pumpid' })
  pumpId!: string;

  @Column({ type: 'varchar', length: 50, name: 'pumpname' })
  pumpName!: string;

  @ManyToOne(() => POI, (poi) => poi.poiId, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'poiid' })
  poi!: POI;

  @ManyToOne(() => FuelProduct, (fuelProduct) => fuelProduct.productId, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fuelproductid' })
  fuelProduct!: FuelProduct;
}
