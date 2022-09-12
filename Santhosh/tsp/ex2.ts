export { }

class Sample {
    //private
    private firstName: string;
    private lastName: string;

    //public
    public setData(fName: string, lName: string): void {
        // let firstName: string;
        // firstName = "Sathesh";
        this.firstName = fName;
        this.lastName = lName;
    }

    public showData(): void {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}

let sampleObj = new Sample();
sampleObj.setData("Sathesh", "Kumar");
sampleObj.showData();