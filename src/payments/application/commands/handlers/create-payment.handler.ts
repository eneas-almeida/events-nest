import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PaymentDto } from 'src/payments/application/dtos/payment.dto';
import { CreatePaymentService } from '../../services/create-payment.service';
import { CreatePaymentCommand } from '../create-payment.command';

@CommandHandler(CreatePaymentCommand)
export class CreatePaymentHandler implements ICommandHandler<CreatePaymentCommand> {
    constructor(private readonly createPaymentService: CreatePaymentService) {}

    async execute(command: CreatePaymentCommand): Promise<any> {
        const { amount, date } = command;

        const paymentDto = new PaymentDto(amount, date);

        await this.createPaymentService.execute(paymentDto);

        return {
            amount,
            date,
        };
    }
}
