import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index({ unique: true })
  title: string;
}
  