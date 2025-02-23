import { IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    date: Date;
}
