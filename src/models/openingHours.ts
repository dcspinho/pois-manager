import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OpeningHours {
  @PrimaryGeneratedColumn()
  scheduleId: number = 0;

  @Column({ type: 'int' })
  weekday: number = 0;

  @Column({ type: 'time' })
  opentime: string = '';

  @Column({ type: 'time' })
  closetime: string = '';

  @Column({ type: 'boolean', default: false })
  holiday: boolean = false;
}
