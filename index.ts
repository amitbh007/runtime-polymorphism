class GlobalCitizen {
    constructor(public tax:number ){}

    calculateTax():number{
        return this.tax
    }

}

class UsCitizen extends GlobalCitizen{
    constructor(tax:number){
        super(tax);
    }
    // a us citizen gives 10 units more tax than global 
    //method overriding 
    calculateTax():number{
        return this.tax + 10;
    }

}

class IndianUsCitizen extends UsCitizen{
    constructor(tax:number,public state:string){
        super(tax);
    }

    //indian living in Us pays double tax as a us citizen
    //method overriding 
    calculateTax():number{
        return 2*super.calculateTax();
    }

    holaText():string{
        return `hello ${this.state}`
    }
}


//refrence variable of super class

const usCitizen:GlobalCitizen = new UsCitizen(10);
const indanUsCitizen:GlobalCitizen = new IndianUsCitizen(10,"missori");

//super class variable doesnt have access to subclass methods
// console.log(indanUsCitizen.holaText()); -> wrong
//but caluclateTax() which is present in super class too, but instead of the orignal superclass implementation
//we get the ovveriden method back ( runtime polymorphism )
console.log("us citizen tax is",usCitizen.calculateTax())
console.log("indian living in us citizen tax is",indanUsCitizen.calculateTax())

//taking reference variable of subcalss will have no meaning at it'll automatically call the overidden class in it.