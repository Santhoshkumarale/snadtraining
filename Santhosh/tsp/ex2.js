"use strict";
exports.__esModule = true;
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //public
    Sample.prototype.setData = function (fName, lName) {
        // let firstName: string;
        // firstName = "Sathesh";
        this.firstName = fName;
        this.lastName = lName;
    };
    Sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Sample;
}());
var sampleObj = new Sample();
sampleObj.setData("Sathesh", "Kumar");
sampleObj.showData();
