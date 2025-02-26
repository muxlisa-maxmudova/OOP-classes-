// Inheritance
// ! constructor is not need
class Animals{
    constructor(name,food,time){
        this.name=name;
        this.food=food;
        this.time=time;
    } // even though we remove this it will not affect the final result
    alive = true;
    diet(){
        console.log(`${this.name} eats ${this.food}`)
    };
    sleep(){
        console.log(`${this.name} sleeps ${this.time} hours`)
    };
}
class Rabbit extends Animals{
    name= 'Rabbit';
    food = 'carrots';
    time = 7
}
class Fish extends Animals{
    name= 'Fish';
    food = 'seaweed';
    time = 4
}
class Owl extends Animals{
    name= 'Owl';
    food = 'rodents';
    time = 5
}

const rabbit = new Rabbit();
const fish = new Fish();
const owl = new Owl();
rabbit.diet();
rabbit.sleep();
fish.diet();
fish.sleep();
owl.diet();
owl.sleep();
console.log(owl.alive)
// class Animals{
//     constructor(name, sound){
//         this.name = name;
//         this.sound = sound;
//     }
//     defineSounds(){
//         console.log(`${this.name} barks like ${this.sound}`)
//     }
// }
// const dog = new Animals('Dog', 'woof-woof')
// dog.defineSounds()
//////////////////////////////
// class Products{
//    constructor(name,price){ //this is a method
//        this.name=name; //defining properties
//        this.price=price;
//    }
//    getInfoAboutPrice(){ //this is also a method
//        console.log(`Products name: ${this.name} and costs ${this.price}`);
//    }
// }
// const laptop = new Products('Acer Nitro 5', 10000);//giving values to params
// laptop.getInfoAboutPrice()//we are applying this method to show the info
// const phone = new Products('LG', 1000);
// phone.getInfoAboutPrice()
// const shirt = new Products('Channel', 200)
// shirt.getInfoAboutPrice()
// const hair_drier = new Products('Dyson', 3000);
// hair_drier.getInfoAboutPrice()
// const pillow = new Products('Comfy', 20)
// pillow.getInfoAboutPrice()