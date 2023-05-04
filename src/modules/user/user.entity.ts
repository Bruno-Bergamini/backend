import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "users"})
export class UserEntity {
  @PrimaryGeneratedColumn()
  user_id: number;
  @Column()
  email: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  user_type_id: number;
}