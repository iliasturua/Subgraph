import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'pairs' })
export class PairEntity {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'jsonb' })
  token0: string;

  @Column({ type: 'jsonb' })
  token1: string;
}
