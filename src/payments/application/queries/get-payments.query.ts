export class GetPaymentsQuery {
    constructor(
        public readonly limit?: number,
        public readonly offset?: number,
        public readonly sortBy?: string,
        public readonly sortType?: string
    ) {}
}
