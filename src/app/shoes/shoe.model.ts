export class Shoe{
  name: string;
  imagePath: string;
  price: number;
  description: string;

  constructor(name: string, imagePath: string, price: number, description: string){
    this.name = name;
    this.imagePath = imagePath;
    this.price = price;
    this.description = description;
  }
}
