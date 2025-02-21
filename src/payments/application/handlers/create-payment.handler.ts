import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePaymentCommand } from '../commands/create-payment.command';

@CommandHandler(CreatePaymentCommand)
export class CreatePaymentHandler implements ICommandHandler<CreatePaymentCommand> {
    constructor() {}

    async execute(command: CreatePaymentCommand): Promise<any> {
        const { amount, date } = command;

        return {
            amount,
            date,
        };
    }
}
