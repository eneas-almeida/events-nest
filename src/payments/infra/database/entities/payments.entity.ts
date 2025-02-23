import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payments')
export class PaymentsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    amount: number;

    @Column()
    score: number;
}
