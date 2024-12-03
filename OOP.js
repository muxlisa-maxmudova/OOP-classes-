
class Product{
    constructor(name,price) {
        this.name=name;
        this.price=price;
    }
    getInfoAboutProduct(){
        console.log(`product name: ${this.name}, price: ${this.price}`);
    }
}
const laptop = new Product("Acer Nitro 5", 10000);
laptop.getInfoAboutProduct();

const cooker = new Product("LG", 1000);
cooker.getInfoAboutProduct();

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound (){
        console.log(`${this.name} sounds like ${this.sound}`);
    }
}
const cat = new Animal('cat', 'meow meow' )
cat.makeSound()

class Interns {
    constructor(name, work, specialty) {
        this.name = name;
        this.work = work;
        this.specialty = specialty;
    }
    introduction(){
        console.log(`${this.name} works as ${this.work} and majors in ${this.specialty}`);
    }
}

const intern1 = new Interns('Mila', 'programmer', 'data analysis')
intern1.introduction()




