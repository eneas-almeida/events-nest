export class CreatePaymentCommand {
    constructor(
        public readonly paymentId: string,
        public readonly amount: number,
        public readonly date: Date
    ) {}
}
