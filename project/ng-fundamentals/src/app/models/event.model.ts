
export class Event {
    nickName?: string;
    price: number;
    constructor(public id: number, public name: string) {
        this.price = 10;
    }

}
