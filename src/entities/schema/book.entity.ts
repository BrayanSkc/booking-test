import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('book')
export class BookSchema extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 10, nullable: false })
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  lastname: string;

  @Column({ default: 18, type: 'integer', nullable: false })
  age: number;

  @Column({ type: 'varchar', length: 20, nullable: false, unique: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 8, nullable: true })
  discountCode: string;

  @Column({ type: 'varchar', length: 15, nullable: false })
  houseId: string;

  @Column({ type: 'date', nullable: true })
  startDate: string;

  @Column({ type: 'date', nullable: false })
  endDate: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
