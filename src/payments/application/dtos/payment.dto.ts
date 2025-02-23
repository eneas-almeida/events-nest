export class PaymentDto {
    constructor(
        public readonly amount: number,
        public readonly date: Date
    ) {}
}
