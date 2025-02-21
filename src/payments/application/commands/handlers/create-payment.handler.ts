import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePaymentCommand } from '../create-payment.command';
import { CreatePaymentService } from '../../services/create-payment.service';

@CommandHandler(CreatePaymentCommand)
export class CreatePaymentHandler implements ICommandHandler<CreatePaymentCommand> {
    constructor(private readonly createPaymentService: CreatePaymentService) {}

    async execute(command: CreatePaymentCommand): Promise<any> {
        const { amount, date } = command;

        await this.createPaymentService.execute(amount, date);

        return {
            amount,
            date,
        };
    }
}
