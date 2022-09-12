"use strict";
exports.__esModule = true;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getData = function () {
        this.firstName = "santhosh";
        this.lastName = "Kumar";
    };
    Test.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Test;
}());
var obj;
obj = new Test();
obj.getData();
obj.showData();
