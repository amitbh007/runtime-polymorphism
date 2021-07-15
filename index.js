"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GlobalCitizen = /** @class */ (function () {
    function GlobalCitizen(tax) {
        this.tax = tax;
    }
    GlobalCitizen.prototype.calculateTax = function () {
        return this.tax;
    };
    return GlobalCitizen;
}());
var UsCitizen = /** @class */ (function (_super) {
    __extends(UsCitizen, _super);
    function UsCitizen(tax) {
        return _super.call(this, tax) || this;
    }
    // a us citizen gives 10 units more tax than global 
    //method overriding 
    UsCitizen.prototype.calculateTax = function () {
        return this.tax + 10;
    };
    return UsCitizen;
}(GlobalCitizen));
var IndianUsCitizen = /** @class */ (function (_super) {
    __extends(IndianUsCitizen, _super);
    function IndianUsCitizen(tax, state) {
        var _this = _super.call(this, tax) || this;
        _this.state = state;
        return _this;
    }
    //indian living in Us pays double tax as a us citizen
    //method overriding 
    IndianUsCitizen.prototype.calculateTax = function () {
        return 2 * _super.prototype.calculateTax.call(this);
    };
    IndianUsCitizen.prototype.holaText = function () {
        return "hello " + this.state;
    };
    return IndianUsCitizen;
}(UsCitizen));
//refrence variable of super class
var usCitizen = new UsCitizen(10);
var indanUsCitizen = new IndianUsCitizen(10, "missori");
//super class variable doesnt have access to subclass methods
// console.log(indanUsCitizen.holaText()); -> wrong
//but caluclateTax() which is present in super class too, but instead of the orignal superclass implementation
//we get the ovveriden method back ( runtime polymorphism )
console.log("us citizen tax is", usCitizen.calculateTax());
console.log("indian living in us citizen tax is", indanUsCitizen.calculateTax());
//taking reference variable of subcalss will have no meaning at it'll automatically call the overidden class in it.
