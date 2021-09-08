class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
}

    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log("Name :" + this.name,  "Strength:" + this.strength, "Speed:" + this.speed, "Health:" + this.health);
    }

    drinkSake() {
        this.health += 10;
    }

}
class Sensei extends Ninja {
    constructor(wisdom){
        super(wisdom);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom =10;
    }
    
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const ninja1 = new Ninja("Riya", 10);
ninja1.drinkSake();
ninja1.sayName();
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();