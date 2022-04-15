"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var simpleDataSource_1 = require("./simpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new simpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (e) { return _this.products.push(e); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (e) { return e.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.getElementorId();
            this.products.push(product);
        }
        else {
            var index_1;
            this.products.forEach(function (e) {
                if (e.id == product.id) {
                    index_1 = e.id;
                }
            });
            this.products.splice(index_1, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index;
        this.products.forEach(function (e) {
            if (e.id == product.id) {
                index = e.id;
            }
        });
        this.products.splice(index, 1);
    };
    ProductService.prototype.getElementorId = function () {
        var key = 1;
        if (this.products.filter(function (x) { return x.id == key; })) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
