import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPaymentsQuery } from '../get-payments.query';

@QueryHandler(GetPaymentsQuery)
export class GetPaymentHandler implements IQueryHandler<GetPaymentsQuery> {
    constructor() {}

    async execute(query: GetPaymentsQuery): Promise<any> {
        return [{ id: 1, amount: 100, date: new Date() }];
    }
}
