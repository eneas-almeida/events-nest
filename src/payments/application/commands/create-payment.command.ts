export class CreatePaymentCommand {
    constructor(
        public readonly flag: string,
        public readonly date: Date
    ) {}
}
