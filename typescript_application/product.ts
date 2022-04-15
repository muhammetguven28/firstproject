export class Product {
  constructor(public id?: number, public name?: string, public category?: string, public price?: number) {}
}

let prd = new Product(1, "TEST URUN", "AKROS", 100);
