import { Product } from "./product";

export class SimpleDataSource {
  private products: Array<Product>;
  constructor() {
    this.products = new Array<Product>(
      new Product(1, "TEST1", "CAT1", 1000),
      new Product(2, "TEST2", "CAT2", 2000),
      new Product(3, "TEST3", "CAT3", 3000),
      new Product(4, "TEST4", "CAT4", 4000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
