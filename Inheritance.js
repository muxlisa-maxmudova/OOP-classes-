
class Animals {
    alive = true
    diet (){
        console.log(`${this.name} eats ${this.food}`)
    }
    sleep (){
        console.log(`${this.name} sleeps`)
    }
}

class Rabbit extends Animals {
    name='Rabbit';
    hop(){
        console.log(`${this.name} hops`)
    }
    food = 'carrot'

}
class Squirrel extends Animals {
    name= 'Squirrel';
    climb(){
        console.log(`${this.name} climbs`)
    }

}
class Tiger extends Animals {
    name='Tiger';
    roar(){
        console.log(`${this.name} roars`)
    }
}
const rabbit = new Rabbit();
rabbit.diet()
const squirrel = new Squirrel();
squirrel.climb()
const tiger = new Tiger();
tiger.roar()


