// 1.create object using object literals

const player = {};
player.name = "Small Nirob";
player.spacialty = "batsman";
player.bat = function() {
    console.log("Swing your bat");
}
console.log(player);
player.bat();

const student = {
    name:"Pandey",
    job:'khai andey',
    ball:function() {
        console.log("throw the ball");
    },
    salary:10000
}

//2.object constructor
const person = new Object();
console.log(person);

// object create method 
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.friend);// undefined

// 4.class
class person1{
    name="ablu";
    address = 'sodor ghat';
    constructor(age) {
        this.age = age;
    }
}
const person2 = new person1(56);
console.log(person2);

// Function use for object

function car(model,price) {
    this.model=model;
    this.price = price;
}
const tesla = new car('elson',32);
console.log(tesla);