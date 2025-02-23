import { AggregateRoot } from '@nestjs/cqrs';
import { PaymentChangedEvent } from 'src/payments/infra/events/payment-changed.event';

export class Payment extends AggregateRoot {
    constructor(
        public id: string,
        public amount: number,
        public date: Date
    ) {
        super();
    }

    sendPayment(newAmount: number): void {
        //this.apply(new PaymentChangedEvent(this.id, this.amount));
    }
}
