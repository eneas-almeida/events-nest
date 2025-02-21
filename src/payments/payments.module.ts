import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePaymentHandler } from './application/handlers/create-payment.handler';
import { PaymentsController } from './controllers/payments.controller';
import { PaymentsService } from './payments.service';

@Module({
    imports: [CqrsModule],
    controllers: [PaymentsController],
    providers: [PaymentsService, CreatePaymentHandler],
})
export class PaymentsModule {}
