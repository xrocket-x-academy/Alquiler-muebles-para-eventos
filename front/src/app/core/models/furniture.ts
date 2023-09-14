export class Furniture {
  id: number;
  idOwner: number;
  name: string;
  description: string;
  stock: number;
  price: number;
  startDate: Date;
  endDate: Date;

  constructor(
    id: number,
    idOwner: number,
    name: string,
    description: string,
    stock: number,
    price: number,
    startDate: Date,
    endDate: Date
  ) {
    this.id = id;
    this.idOwner = idOwner;
    this.name = name;
    this.description = description;
    this.stock = stock;
    this.price = price;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  // Método para crear una nueva instancia de Furniture
  static new(
    id: number,
    idOwner: number,
    name: string,
    description: string,
    stock: number,
    price: number,
    startDate: Date,
    endDate: Date
  ): Furniture {
    return new Furniture(id, idOwner, name, description, stock, price, startDate, endDate);
  }

  // Método para establecer el stock
  setStock(newStock: number): void {
    this.stock = newStock;
  }

  // Método para obtener el propietario
  getOwner(): number {
    return this.idOwner;
  }

  // Método para establecer el precio
  setPrice(newPrice: number): void {
    this.price = newPrice;
  }

  // Método para verificar si el mueble está disponible
  isAvailable(): boolean {
    return this.stock > 0 && this.startDate <= new Date() && this.endDate >= new Date();
  }
}

