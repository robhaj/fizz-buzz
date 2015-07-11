var theNumber = prompt("Pick a Number");
if ((theNumber % 3 === 0)  && (theNumber % 5 === 0)) {
 document.write("FizzBuzz");
 }

 else if (theNumber % 3 === 0) {
 document.write("Fizz");
 }

 else if (theNumber % 5 === 0) {
 document.write("Buzz");
 }

 else
 document.write (theNumber);    
