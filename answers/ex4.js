const morningGreetings = (name) => {
    console.log(`Good morning ${name}`);
}

const eveningGreeting = function (name) {
    console.log(`Good evening ${name}`);
}

const todaysGreeting = () => {
    morningGreetings('Lisa');
    console.log(`Thanks for all you have done during the day`);
    eveningGreeting('Lisa');
}

todaysGreeting();

function myCounter() {
    let count = 0
    return function () {
        return ++count;
    }
}
const noOfTimes = myCounter();
console.log(noOfTimes());



