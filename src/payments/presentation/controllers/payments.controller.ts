import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePaymentCommand } from 'src/payments/application/commands/create-payment.command';
import { PaymentDto } from 'src/payments/application/dtos/payment.dto';
import { PaymentMapper } from 'src/payments/application/mappers/payments.mapper';
import { GetPaymentsQuery } from 'src/payments/application/queries/get-payments.query';
import { CreatePaymentDto } from '../../application/dtos/create-payment.dto';

@Controller('payments')
export class PaymentsController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus
    ) {}

    @Post()
    async createPayment(@Body() createPaymentDto: CreatePaymentDto): Promise<PaymentDto> {
        const { date, amount } = createPaymentDto;
        const command = new CreatePaymentCommand(amount, date);
        const payment = await this.commandBus.execute(command);
        const paymentDto = PaymentMapper.toDto(payment);
        return paymentDto;
    }

    @Get()
    async getPayments(): Promise<PaymentDto[]> {
        const query = new GetPaymentsQuery();
        const payments = await this.queryBus.execute(query);
        const paymentListDto = PaymentMapper.toListDto(payments);
        return paymentListDto;
    }
}
