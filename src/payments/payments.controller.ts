import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePaymentCommand } from './application/commands/create-payment.command';

export interface CreatePaymentDto {
    flag: string;
    date: Date;
}

@Controller('payments')
export class PaymentsController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        const { date, flag } = createPaymentDto;

        const command = new CreatePaymentCommand(flag, date);

        const payment = await this.commandBus.execute(command);

        return payment;
    }
}
