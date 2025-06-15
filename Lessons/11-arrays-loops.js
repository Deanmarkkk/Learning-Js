const myArray = [10, 20, 30] //this is an array
console.log(myArray)
console.log(myArray[1]) //get the index 1, which is 20
myArray[2] = 40; //change the value of index 2, which is 30.
console.log(myArray)
const secondArray = [1, 'Dean Mark', true, {language1: 'html'}]; //you can mix the value inside an array
console.log(secondArray);
console.log(typeof secondArray[2]) //type of index 2, which is true or false
console.log(secondArray.length) //this will tell how many value in the array

myArray.push(50); //this func will add a value in the end of array value
console.log(myArray);

myArray.splice(2, 1) //1. index want to remove, 2. number of values to remove
console.log(myArray); //the value 40 removed from the array