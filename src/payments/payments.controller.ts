import { Body, Controller, Post, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePaymentCommand } from './application/commands/create-payment.command';

export interface CreatePaymentDto {
    flag: string;
    date: Date;
}

@Controller('payments')
export class PaymentsController {
    private readonly logger = new Logger(PaymentsController.name); // Specify the context

    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        const { date, flag } = createPaymentDto;

        const command = new CreatePaymentCommand(flag, date);

        const payment = await this.commandBus.execute(command);

        this.logger.log(`Payment created in: ${date}`);

        return payment;
    }
}
