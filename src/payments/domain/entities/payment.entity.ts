import { v4 } from 'uuid';

export class Payment {
    id: string;
    amount: number;
    date: Date;

    constructor(amount: number, date: Date, id?: string) {
        this.id = id || v4();
        this.amount = amount;
        this.date = date;
    }
}
