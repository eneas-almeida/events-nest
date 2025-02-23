import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from 'src/payments/domain/entities/payment.entity';
import { Repository } from 'typeorm';
import { PaymentsEntity } from '../entities/payments.entity';

@Injectable()
export class PaymentsRepository {
    constructor(
        @InjectRepository(PaymentsEntity)
        private readonly paymentsRepository: Repository<PaymentsEntity>
    ) {}

    async create(payment: Payment): Promise<void> {
        const p = new PaymentsEntity();
        p.amount = payment.amount;
        p.date = payment.date;

        await this.paymentsRepository.insert(p);
    }

    async list(): Promise<Payment[]> {
        return this.paymentsRepository.find();
    }
}
