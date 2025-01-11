// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


function capitalise(str) {
  
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise('You'));

/* 
The program errored because an already existed variable str was been re-declared with the same name.
In this function, re-declaring is not needed as the parameter declared for the function is enough.
*/