import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { CreatePaymentHandler } from './payments/application/handlers/create-payment.handler';

@Module({
    imports: [PaymentsModule],
    controllers: [AppController],
    providers: [AppService, CreatePaymentHandler],
})
export class AppModule {}
