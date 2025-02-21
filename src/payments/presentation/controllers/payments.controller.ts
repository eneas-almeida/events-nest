import { Body, Controller, Post, Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePaymentDto } from '../../application/dtos/create-payment.dto';
import { CreatePaymentCommand } from 'src/payments/application/commands/create-payment.command';

@Controller('payments')
export class PaymentsController {
    constructor(private readonly commandBus: CommandBus) {}

    @Post()
    async createPayment(@Body() createPaymentDto: CreatePaymentDto) {
        const { date, amount } = createPaymentDto;

        const command = new CreatePaymentCommand(amount, date);

        const payment = await this.commandBus.execute(command);

        return payment;
    }
}
