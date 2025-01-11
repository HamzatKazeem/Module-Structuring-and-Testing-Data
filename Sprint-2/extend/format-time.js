// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours =Number(time.slice(0, 2));
 
  const mins = Number(time.slice(3, 5));
  if (hours > 12) {
    return `${((hours) - 12).toString().padStart(2,'0')}:${mins.toString().padStart(2,'0')} pm`;
  }
  else if (hours == 12){
    return `${12}:${mins.toString().padStart(2,'0')} pm`;

  }
  else if (hours==0){

    return `${12}:${mins.toString().padStart(2,'0')} am`;

  }
 else
    return `${time} am`;

 
}


const currentOutput5 = formatAs12HourClock("12:01");
const targetOutput5 = "12:01 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("00:00");
const targetOutput6 = "12:00 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput2 = formatAs12HourClock("23:02");
const targetOutput2 = "11:02 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);


const currentOutput = formatAs12HourClock("00:01");
const targetOutput = "12:01 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);


const currentOutput3 = formatAs12HourClock("03:00");
const targetOutput3 = "03:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);


const currentOutput4 = formatAs12HourClock("16:25");
const targetOutput4 = "04:25 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

