

import { AutoMap } from '@automapper/classes';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

    @Column()
    @AutoMap()
    Firstname: string;

    @Column()
    @AutoMap()
    Lastname: string;

    @Column()
    @AutoMap()
    BornDate: string;

    @Column()
    @AutoMap()
    Phonenumber: string;

    @Column()
    @AutoMap()
    UserAuthId: number;
}