console.log("Hello World");
@ts-check
function hello(string : String){
    console.log("Hello " + string);
}
hello("Sonam")
//hello(1);  through an error you are passing a parameter as number

var n : Number =1

var isWinter : boolean = true
var names : String = "Sonam"
var a: String[] = ['a', 'b' , 'c']
var b : any[] = ["a" , 1 , 1.5 , true]

enum weather {summer , winter , rainy}

var day : weather = weather.rainy
console.log(day)


function hey():void{
    console.log("hey")
}


// Interface

interface Animal{
   name : String;
   age? : number  // optional
}

function printName(stark : Animal){
    console.log(stark.name)
}

printName({name : "Sonam"})
printName({ name : "Nihal" , age : 25})


// classes

class Fruit{
    name : String = "Apple";
    saying : String;
    constructor(){
        this.saying = "hey"
    }
    eat() : void{
        console.log("Hey Apple")
    }
}

var fruit = new Fruit();
fruit.eat();
console.log(fruit.name)


// Inheritance

class Person{
    name : string;
    constructor(name : string){
     this.name = name
    }
    dance(){
        console.log(this.name + " is dancing")
    }
}

var nihal = new Person("nihal");
nihal.dance();

class abc extends Person{
    dance(): void {
        super.dance();
        console.log("abc is dancing")
    }
}

var abc1 = new abc("abc");
abc1.dance();