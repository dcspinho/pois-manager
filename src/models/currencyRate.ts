import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class CurrencyRate {
  @PrimaryColumn({ type: 'varchar', length: 3 })
  currency: string = '';

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  rate: number = 0;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedat: Date = new Date();
}
