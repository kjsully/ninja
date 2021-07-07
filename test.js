
//define class
class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName = () => {
        console.log(this.name)
    }
    showStats = () => {
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor (name, health=200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom = () => {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
    showSenseiStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`)
    }
}


//instantiate object
const ninja1 = new Ninja('Bob')

ninja1.sayName()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.showStats()


const sensei1 = new Sensei('Chuck Norris', 1000)
sensei1.showSenseiStats()
sensei1.speakWisdom()
sensei1.showSenseiStats()

