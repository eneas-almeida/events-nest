import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CreatePaymentHandler } from './application/handlers/create-payment.handler';

@Module({
    imports: [CqrsModule],
    controllers: [PaymentsController],
    providers: [PaymentsService, CreatePaymentHandler],
})
export class PaymentsModule {}
