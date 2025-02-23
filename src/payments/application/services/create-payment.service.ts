import { Injectable, Logger } from '@nestjs/common';
import { CreatePaymentDto } from 'src/payments/application/dtos/create-payment.dto';
import { PaymentDto } from 'src/payments/application/dtos/payment.dto';
import { PaymentsRepository } from 'src/payments/infra/database/repositories/payments.repository';
import { PaymentMapper } from '../mappers/payments.mapper';

@Injectable()
export class CreatePaymentService {
    private logger = new Logger(CreatePaymentService.name);

    constructor(private readonly paymentsRepository: PaymentsRepository) {}

    async execute(createPaymentDto: CreatePaymentDto): Promise<PaymentDto> {
        this.logger.log(`Payment service executed`);

        const payment = PaymentMapper.toEntity(createPaymentDto);

        await this.paymentsRepository.create(payment);

        this.logger.log(`Payment created: ${payment.id}`);

        const paymentDto = PaymentMapper.toDto(payment);

        return paymentDto;
    }
}
