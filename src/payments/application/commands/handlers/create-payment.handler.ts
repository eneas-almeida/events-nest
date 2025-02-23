import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreatePaymentCommand } from '../create-payment.command';
import { Payment } from 'src/payments/domain/entities/payment.entity';
import { PaymentChangedEvent } from 'src/payments/infra/events/payment-changed.event';

@CommandHandler(CreatePaymentCommand)
export class CreatePaymentHandler implements ICommandHandler<CreatePaymentCommand> {
    constructor(private readonly eventBus: EventBus) {}

    async execute(command: CreatePaymentCommand): Promise<any> {
        const payment = new Payment('21291', command.amount, command.date);

        payment.sendPayment(command.amount);

        this.eventBus.publish(new PaymentChangedEvent(payment.id, payment.amount));
    }
}
