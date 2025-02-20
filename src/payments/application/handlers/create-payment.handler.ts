// create-user.handler.ts
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePaymentCommand } from '../commands/create-payment.command';

@CommandHandler(CreatePaymentCommand)
export class CreatePaymentHandler implements ICommandHandler<CreatePaymentCommand> {
    constructor() {}

    async execute(command: CreatePaymentCommand): Promise<any> {
        const { flag, date } = command;

        return {
            flag,
            date,
        };
    }
}
