import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "cats" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;
}
