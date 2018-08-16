
export class Event {
    nickName?: string;
    price: number;
    /**
     * @param  {number} publicid
     * @param  {string} publicname
     */
    constructor(public id: number, public name: string) {
        this.price = 10;
    }

}
