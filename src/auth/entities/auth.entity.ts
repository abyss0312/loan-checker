
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAuth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Username: string;

  @Column()
  Password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  CreatedDate: string
}