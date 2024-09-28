import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { OpeningHours } from './openingHours';
import { Pump } from './pump';

@Entity('poi')
export class POI {
  @PrimaryGeneratedColumn({ name: 'poiid' })
  poiId!: number;

  @Column('varchar', { name: 'status' })
  status!: string;

  @Column('varchar', { name: 'country' })
  country!: string;

  @Column('varchar', { name: 'zipcode' })
  zipCode!: string;

  @Column('varchar', { name: 'street' })
  street!: string;

  @Column('varchar', { name: 'housenumber' })
  houseNumber!: string;

  @ManyToOne(() => OpeningHours, (openingHours) => openingHours.scheduleId)
  @JoinColumn({ name: 'openinghoursid' })
  openingHours!: OpeningHours;

  @OneToMany(() => Pump, (pump) => pump.poi, {
    cascade: ['remove'],
    onDelete: 'CASCADE',
  })
  pumps!: Pump[];
}
