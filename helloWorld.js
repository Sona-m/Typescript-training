
console.log("Hello World");

function hello(string) {
    console.log("Hello " + string);
}
hello("Sonam");
//hello(1);  through an error you are passing a parameter as number
var n = 1;
var isWinter = true;
var names = "Sonam";
var a = ['a', 'b', 'c'];
var b = ["a", 1, 1.5, true];
var weather;
(function (weather) {
    weather[weather["summer"] = 0] = "summer";
    weather[weather["winter"] = 1] = "winter";
    weather[weather["rainy"] = 2] = "rainy";
})(weather || (weather = {}));
var day = weather.rainy;
console.log(day);
function hey() {
    console.log("hey");
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Sonam" });
printName({ name: "Nihal", age: 25 });
// classes
var Fruit = /** @class */ (function () {
    function Fruit() {
        this.name = "Apple";
        this.saying = "hey";
    }
    Fruit.prototype.eat = function () {
        console.log("Hey Apple");
    };
    return Fruit;
}());
var fruit = new Fruit();
fruit.eat();
console.log(fruit.name);
// Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var nihal = new Person("nihal");
nihal.dance();
var abc = /** @class */ (function (_super) {
    __extends(abc, _super);
    function abc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abc.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("abc is dancing");
    };
    return abc;
}(Person));
var abc1 = new abc("abc");
abc1.dance();
