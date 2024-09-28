import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductPrice } from './productPrice';

@Entity('fuelproduct')
export class FuelProduct {
  @PrimaryGeneratedColumn({ name: 'productid' })
  productId!: number;

  @Column({ type: 'varchar', length: 50, name: 'productname' })
  productName!: string;

  @ManyToOne(() => ProductPrice, (productPrice) => productPrice.productPriceId)
  @JoinColumn({ name: 'productpriceid' })
  productPrice!: ProductPrice;
}
