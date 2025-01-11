// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

/* The program errored because an already existed variable nam decimalNumber was been re-declared with the same name
Also, variable name decimalNumber that is local to the function was been referenced in line 13, which ought to be the function name.
*/
