import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreatePaymentHandler } from './application/commands/handlers/create-payment.handler';
import { GetPaymentsHandler } from './application/queries/handlers/get-payments-handler';
import { CreatePaymentService } from './application/services/create-payment.service';
import { PaymentsEntity } from './infra/database/entities/payments.entity';
import { PaymentsRepository } from './infra/database/repositories/payments.repository';
import { PaymentsController } from './presentation/controllers/payments.controller';
import { PaymentChangedHandler } from './infra/events/handlers/payment-changed-handler';

@Module({
    imports: [TypeOrmModule.forFeature([PaymentsEntity]), CqrsModule],
    controllers: [PaymentsController],
    providers: [
        PaymentsRepository,
        CreatePaymentHandler,
        GetPaymentsHandler,
        CreatePaymentService,
        PaymentChangedHandler,
    ],
})
export class PaymentsModule {}
