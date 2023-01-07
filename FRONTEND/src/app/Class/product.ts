export class Product {
    name!: string;
    description!: string;
    price: number = 0;
    id!: string;
    quantity!: number;
    status!: boolean;
    image!: string;
    constructor(name: string, description: string, price: number, id: string, quantity:number, status:boolean, image:string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.id=id;
        this.quantity=quantity;
        this.status=status;
        this.image=image;
    }
}