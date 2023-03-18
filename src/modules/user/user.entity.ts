import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users"})
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;
}