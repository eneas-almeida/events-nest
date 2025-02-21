export class CreatePaymentCommand {
    constructor(
        public readonly amount: number,
        public readonly date: Date
    ) {}
}
