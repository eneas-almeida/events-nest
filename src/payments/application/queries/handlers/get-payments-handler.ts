import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaymentsRepository } from 'src/payments/infra/database/repositories/payments.repository';
import { GetPaymentsQuery } from '../get-payments.query';

@QueryHandler(GetPaymentsQuery)
export class GetPaymentsHandler implements IQueryHandler<GetPaymentsQuery> {
    constructor(private readonly paymentsRepository: PaymentsRepository) {}

    async execute(query: GetPaymentsQuery): Promise<any> {
        const payments = await this.paymentsRepository.list();
        return payments;
    }
}
