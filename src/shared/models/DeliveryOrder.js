export class DeliveryOrder
{
    constructor(id, product, distance, quantity, time, pay)
    {
        this.id = id; 
        this.product = product;
        this.distance = distance;
        this.quantity = quantity;
        this.time = time;
        this.pay = pay;
    }
}
