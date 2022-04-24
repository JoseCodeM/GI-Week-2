//Toms Information
let tom = {
    mass: 8,
    height: 9
} 

//Jerry's Information
let jerry = {
    mass: 45,
    height: 10
}

//BMI's
let tomBMI = tom.mass / (tom.height * tom.height);
let jerryBMI = jerry.mass / (jerry.height * jerry.height);

//Tests
console.log(tomBMI);
console.log(jerryBMI);

//Result on who has a higher BMI
if (tomBMI < jerryBMI) {
    console.log("is Tom's BMI higher than Jerry's? false");
}