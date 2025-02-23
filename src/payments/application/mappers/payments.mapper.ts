import { Payment } from 'src/payments/domain/entities/payment.entity';
import { PaymentDto } from '../dtos/payment.dto';
import { PaymentsEntity } from 'src/payments/infra/database/entities/payments.entity';

export class PaymentMapper {
    static toEntity(paymentDto: PaymentDto): Payment {
        const payment = new Payment(paymentDto.amount, paymentDto.date);
        return payment;
    }

    static toDto(payment: Payment): PaymentDto {
        const paymentDto = new PaymentDto(payment.amount, payment.date);
        return paymentDto;
    }

    static toListDto(payments: Payment[]): PaymentDto[] {
        const paymentDtos = payments.map((p) => new PaymentDto(p.amount, p.date));
        return paymentDtos;
    }

    static toListEntity(paymentDtos: PaymentDto[]): Payment[] {
        const payments = paymentDtos.map((p) => new Payment(p.amount, p.date));
        return payments;
    }

    static toPaymentsEntity(payment: Payment): PaymentsEntity {
        const p = new PaymentsEntity();
        p.amount = payment.amount;
        p.date = payment.date;
        return p;
    }
}
