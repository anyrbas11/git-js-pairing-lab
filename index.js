//Question #1
const fiveToOneHundred = () => {
    for (let i = 5; i <= 500; i++) {
        console.log(i);
    }
};

// Question #2
const multipleOfThree = () => {
    for (let i = 0; i <= 100; i += 3) {
        console.log(i);
    }
}
//Question #3
const multipleOfThreeOrFive = () => {
    for (let i = 0; i <= 100; i++) {
        if (i % 5 == 0 || i % 3 == 0) {
            console.log(i)
        }
    }
}
//Question #4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }

}
//Question #5
const multiply = (num, num2) => {
    return num * num2
}
const add = (num, num2) => {
    if (num == num2) {
        return (num + num2) * 3
    }
    else {
        return num + num2
    }
}


console.log(add(4, 4))

// Bonus Questions

// Question 12

const isLeapYear = (year) => {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        return true;
    } else {
            return false;
    }
}

console.log(isLeapYear(1900))

