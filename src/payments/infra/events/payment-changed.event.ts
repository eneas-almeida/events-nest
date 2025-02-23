export class PaymentChangedEvent {
    constructor(
        public readonly id: string,
        public readonly newAmount: number
    ) {}
}
