import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePaymentHandler } from './application/handlers/create-payment.handler';
import { PaymentsController } from './controllers/payments.controller';
import { CreatePaymentService } from './application/services/create-payment.service';

@Module({
    imports: [CqrsModule],
    controllers: [PaymentsController],
    providers: [CreatePaymentHandler, CreatePaymentService],
})
export class PaymentsModule {}
