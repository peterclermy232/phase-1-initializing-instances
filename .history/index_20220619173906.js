// Write your code here

class Breakfast{
    constructor(food,drink){
    this.food = food;
    this.drink = drink;
}
}

class Lunch{
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner{
    #salad;
    #soup;
    constructor(salad,soup,entree,desse){
        this.salad = salad;
        this.soup = soup
    }
}