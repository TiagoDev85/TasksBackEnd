import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity() // digo que a classe é uma tabela
export class Tasks {
  @PrimaryGeneratedColumn()
  id_task: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    default: false
  })
  finished: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
