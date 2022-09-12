"use strict";
exports.__esModule = true;
var Sample = /** @class */ (function () {
    function Sample(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    Sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Sample;
}());
var sampleObj = new Sample("Mohan", "Krishna");
sampleObj.showData();
