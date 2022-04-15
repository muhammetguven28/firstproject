import { IProductService } from "./IProduct";
import { Product } from "./product";
import { SimpleDataSource } from "./simpleDataSource";
export class ProductService implements IProductService {
  private dataSource: SimpleDataSource;
  private products: Array<Product>;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach((e) => this.products.push(e));
  }

  getById(id: number): Product {
    return this.products.filter((e) => e.id === id)[0];
  }
  public getProducts(): Product[] {
    return this.products;
  }
  saveProduct(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.getElementorId();

      this.products.push(product);
    } else {
      let index;
      this.products.forEach((e) => {
        if (e.id == product.id) {
          index = e.id;
        }
      });
      this.products.splice(index, 1, product);
    }
  }
  deleteProduct(product: Product): void {
    let index;
    this.products.forEach((e) => {
      if (e.id == product.id) {
        index = e.id;
      }
    });
    this.products.splice(index, 1);
  }
  private getElementorId(): number {
    let key = 1;
    if (this.products.filter((x) => x.id == key)) {
      key++;
    }
    return key;
  }
}
