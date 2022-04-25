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
let compare = jerryBMI > tomBMI;

if (compare = true) {
    console.log("Jerry's BMI is higher than Toms BMI")
}