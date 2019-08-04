(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <app-ecommerce></app-ecommerce>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/ecommerce.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/ecommerce.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" href=\"#\">SmartShopping Application</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleCollapsed()\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div id=\"navbarResponsive\" [ngClass]=\"{'collapse': collapsed, 'navbar-collapse': true}\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\" (click)=\"reset()\">Home\r\n                        <span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<div class=\"row\">\r\n    <div class=\"col-md-9\">\r\n        <app-products #productsC [hidden]=\"orderFinished\"></app-products>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n        <app-shopping-cart (onOrderFinished)=finishOrder($event) #shoppingCartC\r\n                           [hidden]=\"orderFinished\"></app-shopping-cart>\r\n    </div>\r\n    <div class=\"col-md-6 offset-3\">\r\n        <app-orders #ordersC [hidden]=\"!orderFinished\"></app-orders>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/orders/orders.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/orders/orders.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">ORDER</h2>\n<ul>\n    <li *ngFor=\"let order of orders.productOrders\">\n        {{ order.product.name }} - ${{ order.product.price }} x {{ order.quantity}} pcs.\n    </li>\n</ul>\n<h3 class=\"text-right\">Total amount: ${{ total }}</h3>\n\n<button class=\"btn btn-primary btn-block\" (click)=\"pay()\" *ngIf=\"!paid\">Pay</button>\n\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"paid\">\n    <strong>Congratulation!</strong> You successfully made the order.\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/products/products.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/products/products.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row card-deck\">\n    <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let order of productOrders\">\n        <div class=\"card text-center\">\n            <div class=\"card-header\">\n                <h4>{{order.product.name}}</h4>\n            </div>\n            <div class=\"card-body\">\n                <a href=\"#\"><img class=\"card-img-top\" src={{order.product.pictureUrl}} alt=\"\"></a>\n                <h5 class=\"card-title\">${{order.product.price}}</h5>\n                <div class=\"row\">\n                    <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n                        <input type=\"number\" min=\"0\" class=\"form-control\" [(ngModel)]=order.quantity>\n                    </div>\n                    <div class=\"col-4 padding-0\" *ngIf=\"!isProductSelected(order.product)\">\n                        <button class=\"btn btn-primary\" (click)=\"addToCart(order)\"\n                                [disabled]=\"order.quantity <= 0\">Add To Cart\n                        </button>\n                    </div>\n                    <div class=\"col-12\" *ngIf=\"isProductSelected(order.product)\">\n                        <button class=\"btn btn-primary btn-block\"\n                                (click)=\"removeFromCart(order)\">Remove From Cart\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ecommerce/shopping-cart/shopping-cart.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-danger mb-3\" style=\"max-width: 18rem;\">\n    <div class=\"card-header text-center\">Shopping Cart</div>\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">Total: ${{total}}</h5>\n        <hr>\n        <h6 class=\"card-title\">Items bought:</h6>\n\n        <ul>\n            <li *ngFor=\"let order of orders.productOrders\">\n                {{ order.product.name }} - {{ order.quantity}} pcs.\n            </li>\n        </ul>\n\n        <button class=\"btn btn-light btn-block\" (click)=\"finishOrder()\"\n                [disabled]=\"orders.productOrders.length == 0\">Checkout\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-top: 65px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecommerce/ecommerce.component */ "./src/app/ecommerce/ecommerce.component.ts");
/* harmony import */ var _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ecommerce/products/products.component */ "./src/app/ecommerce/products/products.component.ts");
/* harmony import */ var _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ecommerce/orders/orders.component */ "./src/app/ecommerce/orders/orders.component.ts");
/* harmony import */ var _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ecommerce/shopping-cart/shopping-cart.component */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ecommerce/services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _ecommerce_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__["EcommerceComponent"],
            _ecommerce_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
            _ecommerce_orders_orders_component__WEBPACK_IMPORTED_MODULE_8__["OrdersComponent"],
            _ecommerce_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [_ecommerce_services_EcommerceService__WEBPACK_IMPORTED_MODULE_10__["EcommerceService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.css":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9lY29tbWVyY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/ecommerce.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ecommerce/ecommerce.component.ts ***!
  \**************************************************/
/*! exports provided: EcommerceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceComponent", function() { return EcommerceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EcommerceComponent = class EcommerceComponent {
    constructor() {
        this.collapsed = true;
        this.orderFinished = false;
    }
    ngOnInit() {
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
    }
    finishOrder(orderFinished) {
        this.orderFinished = orderFinished;
    }
    reset() {
        this.orderFinished = false;
        this.productsC.reset();
        this.shoppingCartC.reset();
        this.ordersC.paid = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productsC', { static: false })
], EcommerceComponent.prototype, "productsC", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('shoppingCartC', { static: false })
], EcommerceComponent.prototype, "shoppingCartC", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ordersC', { static: false })
], EcommerceComponent.prototype, "ordersC", void 0);
EcommerceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ecommerce',
        template: __webpack_require__(/*! raw-loader!./ecommerce.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/ecommerce.component.html"),
        styles: [__webpack_require__(/*! ./ecommerce.component.css */ "./src/app/ecommerce/ecommerce.component.css")]
    })
], EcommerceComponent);



/***/ }),

/***/ "./src/app/ecommerce/models/product-order.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/ecommerce/models/product-order.model.ts ***!
  \*********************************************************/
/*! exports provided: ProductOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrder", function() { return ProductOrder; });
/* harmony import */ var _product_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.model */ "./src/app/ecommerce/models/product.model.ts");

class ProductOrder {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
}
ProductOrder.ctorParameters = () => [
    { type: _product_model__WEBPACK_IMPORTED_MODULE_0__["Product"] },
    { type: Number }
];


/***/ }),

/***/ "./src/app/ecommerce/models/product-orders.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/models/product-orders.model.ts ***!
  \**********************************************************/
/*! exports provided: ProductOrders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
class ProductOrders {
    constructor() {
        this.productOrders = [];
    }
}


/***/ }),

/***/ "./src/app/ecommerce/models/product.model.ts":
/*!***************************************************!*\
  !*** ./src/app/ecommerce/models/product.model.ts ***!
  \***************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, price, pictureUrl) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.pictureUrl = pictureUrl;
    }
}
Product.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number },
    { type: String }
];


/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.css":
/*!*******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9vcmRlcnMvb3JkZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/ecommerce/orders/orders.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ecommerce/orders/orders.component.ts ***!
  \******************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");



let OrdersComponent = class OrdersComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.orders = this.ecommerceService.ProductOrders;
    }
    ngOnInit() {
        this.paid = false;
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.orders = this.ecommerceService.ProductOrders;
        });
        this.loadTotal();
    }
    pay() {
        this.paid = true;
        this.ecommerceService.saveOrder(this.orders).subscribe();
    }
    loadTotal() {
        this.sub = this.ecommerceService.TotalChanged.subscribe(() => {
            this.total = this.ecommerceService.Total;
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_2__["EcommerceService"] }
];
OrdersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__(/*! raw-loader!./orders.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/orders/orders.component.html"),
        styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/ecommerce/orders/orders.component.css")]
    })
], OrdersComponent);



/***/ }),

/***/ "./src/app/ecommerce/products/products.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ecommerce/products/products.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ecommerce/products/products.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");




let ProductsComponent = class ProductsComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.productOrders = [];
        this.products = [];
        this.productSelected = false;
    }
    ngOnInit() {
        this.productOrders = [];
        this.loadProducts();
        this.loadOrders();
    }
    addToCart(order) {
        this.ecommerceService.SelectedProductOrder = order;
        this.selectedProductOrder = this.ecommerceService.SelectedProductOrder;
        this.productSelected = true;
    }
    removeFromCart(productOrder) {
        let index = this.getProductIndex(productOrder.product);
        if (index > -1) {
            this.shoppingCartOrders.productOrders.splice(this.getProductIndex(productOrder.product), 1);
        }
        this.ecommerceService.ProductOrders = this.shoppingCartOrders;
        this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        this.productSelected = false;
    }
    getProductIndex(product) {
        return this.ecommerceService.ProductOrders.productOrders.findIndex(value => value.product === product);
    }
    isProductSelected(product) {
        return this.getProductIndex(product) > -1;
    }
    loadProducts() {
        this.ecommerceService.getAllProducts()
            .subscribe((products) => {
            this.products = products;
            this.products.forEach(product => {
                this.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrder"](product, 0));
            });
        }, (error) => console.log(error));
    }
    loadOrders() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.shoppingCartOrders = this.ecommerceService.ProductOrders;
        });
    }
    reset() {
        this.productOrders = [];
        this.loadProducts();
        this.ecommerceService.ProductOrders.productOrders = [];
        this.loadOrders();
        this.productSelected = false;
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_3__["EcommerceService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/ecommerce/products/products.component.css")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/ecommerce/services/EcommerceService.ts":
/*!********************************************************!*\
  !*** ./src/app/ecommerce/services/EcommerceService.ts ***!
  \********************************************************/
/*! exports provided: EcommerceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceService", function() { return EcommerceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let EcommerceService = class EcommerceService {
    constructor(http) {
        this.http = http;
        this.productsUrl = "/api/products";
        this.ordersUrl = "/api/orders";
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.productOrderSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ordersSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.totalSubject = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ProductOrderChanged = this.productOrderSubject.asObservable();
        this.OrdersChanged = this.ordersSubject.asObservable();
        this.TotalChanged = this.totalSubject.asObservable();
    }
    getAllProducts() {
        return this.http.get(this.productsUrl);
    }
    saveOrder(order) {
        return this.http.post(this.ordersUrl, order);
    }
    set SelectedProductOrder(value) {
        this.productOrder = value;
        this.productOrderSubject.next();
    }
    get SelectedProductOrder() {
        return this.productOrder;
    }
    set ProductOrders(value) {
        this.orders = value;
        this.ordersSubject.next();
    }
    get ProductOrders() {
        return this.orders;
    }
    get Total() {
        return this.total;
    }
    set Total(value) {
        this.total = value;
        this.totalSubject.next();
    }
};
EcommerceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
EcommerceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()
], EcommerceService);



/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjb21tZXJjZS9zaG9wcGluZy1jYXJ0L3Nob3BwaW5nLWNhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ecommerce/shopping-cart/shopping-cart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ecommerce/shopping-cart/shopping-cart.component.ts ***!
  \********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/product-orders.model */ "./src/app/ecommerce/models/product-orders.model.ts");
/* harmony import */ var _models_product_order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/product-order.model */ "./src/app/ecommerce/models/product-order.model.ts");
/* harmony import */ var _services_EcommerceService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/EcommerceService */ "./src/app/ecommerce/services/EcommerceService.ts");





let ShoppingCartComponent = class ShoppingCartComponent {
    constructor(ecommerceService) {
        this.ecommerceService = ecommerceService;
        this.total = 0;
        this.orderFinished = false;
        this.onOrderFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.loadCart();
        this.loadTotal();
    }
    calculateTotal(products) {
        let sum = 0;
        products.forEach(value => {
            sum += (value.product.price * value.quantity);
        });
        return sum;
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    finishOrder() {
        this.orderFinished = true;
        this.ecommerceService.Total = this.total;
        this.onOrderFinished.emit(this.orderFinished);
    }
    loadTotal() {
        this.sub = this.ecommerceService.OrdersChanged.subscribe(() => {
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }
    loadCart() {
        this.sub = this.ecommerceService.ProductOrderChanged.subscribe(() => {
            let productOrder = this.ecommerceService.SelectedProductOrder;
            if (productOrder) {
                this.orders.productOrders.push(new _models_product_order_model__WEBPACK_IMPORTED_MODULE_3__["ProductOrder"](productOrder.product, productOrder.quantity));
            }
            this.ecommerceService.ProductOrders = this.orders;
            this.orders = this.ecommerceService.ProductOrders;
            this.total = this.calculateTotal(this.orders.productOrders);
        });
    }
    reset() {
        this.orderFinished = false;
        this.orders = new _models_product_orders_model__WEBPACK_IMPORTED_MODULE_2__["ProductOrders"]();
        this.orders.productOrders = [];
        this.loadTotal();
        this.total = 0;
    }
};
ShoppingCartComponent.ctorParameters = () => [
    { type: _services_EcommerceService__WEBPACK_IMPORTED_MODULE_4__["EcommerceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ShoppingCartComponent.prototype, "onOrderFinished", void 0);
ShoppingCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shopping-cart',
        template: __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/ecommerce/shopping-cart/shopping-cart.component.html"),
        styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/ecommerce/shopping-cart/shopping-cart.component.css")]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\DigitalLockerWorkspace\SmartShoppingApplication\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map