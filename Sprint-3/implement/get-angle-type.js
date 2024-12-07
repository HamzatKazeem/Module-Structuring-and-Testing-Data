// Implement a function getAngleType

// Acceptance criteria:

// Given an angle in degrees,
// When the function getAngleType is called with this angle,
// Then it should:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getAngleType(angle_Value){

  if (angle_Value==90) 
    return "Right Angle"
  else if (angle_Value < 90) 
    return "Acute Angle"
  else if (angle_Value > 90 && angle_Value < 180) 
    return "Obtuse Angle"
  else if (angle_Value ==180) 
    return "Straight Angle"
  else if (angle_Value > 180 && angle_Value <= 360) 
    return "Reflex Angle"
  else
  return "Invalid Value"
}

// Accept input from the console
rl.question('Please enter a value for angle between 0 and 360: ', (angle_Value) => {
  ; // Pass the input to the function

  console.assert(getAngleType(angle_Value) === "Right Angle", angle_Value, "entered. Angle value must be 90");
  
  rl.close();
  
});

