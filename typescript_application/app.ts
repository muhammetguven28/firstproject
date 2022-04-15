import { Product } from "./product";
import { ProductService } from "./productService";

let result, getById, _delete, _update;
let prdlist = new ProductService();

getById = prdlist.getById(2);
console.log(getById);

let newprd: Product = new Product(null, "DENEME", "TELFEON", 2800);
_update = prdlist.saveProduct(newprd);

result = prdlist.getProducts();
result.forEach((element) => {
  console.log(element.name);
});
