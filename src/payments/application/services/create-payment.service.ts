import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CreatePaymentService {
    private logger = new Logger(CreatePaymentService.name);

    constructor() {}

    async execute(amount: number, date: Date): Promise<any> {
        this.logger.log(`Payment service executed`);

        return {
            amount,
            date,
        };
    }
}
