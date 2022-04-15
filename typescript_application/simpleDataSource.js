"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "TEST1", "CAT1", 1000), new product_1.Product(2, "TEST2", "CAT2", 2000), new product_1.Product(3, "TEST3", "CAT3", 3000), new product_1.Product(4, "TEST4", "CAT4", 4000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
