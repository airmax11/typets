class Newclass {
    name: string;

    constructor(n: string){
        this.name = n;
    }

    desribe() {
        console.log("Hello " + this.name)
    }

    printSmt() {
        console.log("The length is " + this.name.length)
    }
}

const acc = new Newclass("Accounting")


console.log(acc.name);

acc.desribe()
acc.printSmt()

