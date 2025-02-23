import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PaymentChangedEvent } from '../payment-changed.event';

@EventsHandler(PaymentChangedEvent)
export class PaymentChangedHandler implements IEventHandler<PaymentChangedEvent> {
    constructor() {}

    handle(event: PaymentChangedEvent) {
        console.log('Event executou');
    }
}
