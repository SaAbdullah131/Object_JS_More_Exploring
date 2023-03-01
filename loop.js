// loop use in object 
const numbers = [12,54,64,3,54];
for(const number of numbers) {
    console.log(number);
}
const bottle = {
    color:'yellow',
    price: 50,
    isCleaned:true,
    capacity: 1
}
// 1.for of loop can not be used with objects
// for(const key of bottle) {
//     console.log(key);
// }
// First Option to Loop through an objects
/*
 3 ways to read object properties 
 bottle.name
 bottle['bottle']
 bottle[key]
*/
const keys = Object.keys(bottle);

// loop into keys ..cause it's an array ..we can use keys as array 
for(const key of keys) {
    // console.log(key,bottle[key]);
}
// for in loop...mostly used in object for in objectName
for(const key  in bottle) {
    const prop = bottle[key];
    console.log(key,prop);
}
const pair = Object.entries(bottle);
console.log(pair);
for(const[key,value]of pair){
    console.log(key,value);
}
