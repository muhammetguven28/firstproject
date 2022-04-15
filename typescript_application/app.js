"use strict";
exports.__esModule = true;
var product_1 = require("./product");
var productService_1 = require("./productService");
var result, getById, _delete, _update;
var prdlist = new productService_1.ProductService();
getById = prdlist.getById(2);
console.log(getById);
var newprd = new product_1.Product(null, "DENEME", "TELFEON", 2800);
_update = prdlist.saveProduct(newprd);
result = prdlist.getProducts();
result.forEach(function (element) {
    console.log(element.name);
});
