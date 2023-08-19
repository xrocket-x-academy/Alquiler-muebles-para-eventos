export class Furniture {
  id: number;
  idOwner: number;
  name:string;
  description: string;
  stock: number;
  price: number;
  startDate: Date;
  endDate: Date;

  constructor(
    id: number,
    idOwner : number,
    name:string,
    description: string,
    stock: number,
    price: number,
    startDate: Date,
    endDate: Date)
    {
    this.id = id;
    this.idOwner = idOwner;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.startDate = startDate,
    this.endDate = endDate

  }
  //métodos a especificar//

  new(){ };

  setStock(){ };

  getOwner(){ };

  setPrice() { };

  isAvailable(){ };
}


