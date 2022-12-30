// 1. Declare a function fullName and it prints out your full name.
function fullName1() {
    console.log("Rasul Aliyarov");
}
fullName1();


// 2. Declare an arrow function fullName and now it takes firstName, lastName as a parameter and returns your full name.
let fullName2 = (firstname, lastname) => {
    console.log(firstname + lastname);
}

fullName2("Rasul", "Aliyarov")

// 3. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function that calculates perimeterOfRectangle.
perimeterOfRectangle = (width, height) => {
    return 2 * (width + height);
}

console.log(perimeterOfRectangle(10, 10))

// 4  Body mass index(BMI) is calculated

function bmiCalculate(weight, height) {
    let bmi = weight / (height * height)

    if (bmi < 18.5) {
        console.log(`Your IBM ${bmi} kg: You have underweight!`)
    }
    else if (bmi < 24.9) {
        console.log(`Your IBM ${bmi} kg: You have normal weight!`)
    }
    else if (bmi < 29.9) {
        console.log(`Your IBM ${bmi} kg: You have overweight!`)
    }
    else if (bmi >= 30) {
        console.log(`Your IBM ${bmi} kg: You have obese!`)
    }
}

bmiCalculate(60, 0.4)

// 5. Math.max returns its largest argument. 

function largestArgument(number1, number2, number3) {
    if (number1 > number2 && number1 > number3) {
        console.log(number1)
    }
    else if (number2 > number3) {
        console.log(number2)
    }
    else {
        console.log(number3)
    }
}

largestArgument(-6, -4, -2);


// 6. Declare a function name. It takes an array as a parameter and it returns the reverse of the array (don't use method).
let arrayNumbers = [1, 5, 3, 6, 8, 2, 9, 7, 0];
let arrayLetters = ["A", "B", "C", "D"]
function functionReverse(anyArray) {
    for (let i = 0; i < anyArray.length; i++) {
        for (let j = i + 1; j < anyArray.length; j++) {
            let rezerv = anyArray[i]
            anyArray[i] = anyArray[j]
            anyArray[j] = rezerv
        }
    }
    console.log(arrayLetters);
}

functionReverse(arrayLetters)


// 7. Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(number, inpow) {
    let rezerv = number;
    for (let i = 1; i < inpow; i++) {
        rezerv = rezerv * number
    }

    console.log(rezerv)
}

pow(5, 3)