
//define class
class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkSake(){
        this.health += 10
    }
}


//instantiate object
const ninja1 = new Ninja('Bob')

ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()

