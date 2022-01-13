const morningGreetings = (name) => {
    console.log(`Good morning ${name}`); 
  }
  const toDo = function (taskName) {
    console.log(`Today you should ${taskName}`);
  }
   
  const todaysGreeting = () => {
    morningGreetings('Lisa')
    console.log(`Thanks for all you have done during yesterday`);
    toDo('practice your JavaScript further.');
  }
   
  todaysGreeting();
   
   function myCounter ()  {
    let count = 0
    return function () {
       return ++count;
    }
  }

  const noOfTimes = myCounter();
  noOfTimes();
  console.log(noOfTimes()); 