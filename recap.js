class Products{
   constructor(name,price){ //this is a method
       this.name=name; //defining properties
       this.price=price;
   }
   getInfoAboutPrice(){ //this is also a method
       console.log(`Products name: ${this.name} and costs ${this.price}`);
   }
}
const laptop = new Products('Acer Nitro 5', 10000);//giving values to params
laptop.getInfoAboutPrice()//we are applying this method to show the info
const phone = new Products('LG', 1000);
phone.getInfoAboutPrice()
const shirt = new Products('Channel', 200)
shirt.getInfoAboutPrice()
const hair_drier = new Products('Dyson', 3000);
hair_drier.getInfoAboutPrice()
const pillow = new Products('Comfy', 20)
pillow.getInfoAboutPrice()