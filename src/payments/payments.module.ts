import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePaymentHandler } from './application/commands/handlers/create-payment.handler';
import { CreatePaymentService } from './application/services/create-payment.service';
import { PaymentsController } from './presentation/controllers/payments.controller';

@Module({
    imports: [CqrsModule],
    controllers: [PaymentsController],
    providers: [CreatePaymentHandler, CreatePaymentService],
})
export class PaymentsModule {}
