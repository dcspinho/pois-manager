import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { CurrencyRate } from './currencyRate';

@Entity('productprice')
export class ProductPrice {
  @PrimaryGeneratedColumn({ name: 'productpriceid' })
  productPriceId!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'price' })
  price!: number;

  @ManyToOne(() => CurrencyRate, (currencyRate) => currencyRate.currency)
  @JoinColumn({ name: 'currency' })
  currency!: CurrencyRate;
}
