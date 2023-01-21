// We get the form and the div where the calculated result comes out
const form = document.querySelector('#forms');
const result = document.querySelector('.result');

// Function for form
function resultforms(event) {

  // Prevent the form's default event
  event.preventDefault();
  
  // We get the values of the inputs
  const inputWeight = document.querySelector('#Weight').value;
  const inputheight = document.querySelector('#height').value;

  // With the values of the inputs obtained, we calculate to obtain the BMI result ( Weight divided by height² )
  const imcTotal = (inputWeight / (inputheight * inputheight)).toFixed(2);
  
  // If the user's BMI is less than 18.49, run this line:
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    result.innerHTML = `<p> Your BMI is: <strong> ${imcTotal} </strong> - It means you are too skinny. &#x1F626;  </p>`
  }
  // If the user's BMI is between 18.5 and 24.9 run this line:
   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    result.innerHTML = `<p> Your BMI is: <strong> ${imcTotal} </strong> - Your BMI is considered "Normal"". &#x1F604;  </p>`
  }
  // If the user's BMI is between 25.00 and 29.9 run this line:
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    result.innerHTML = `<p> Your BMI is: <strong> ${imcTotal} </strong> - This means your rating is "OverWeight". &#x1F615;  </p>`
  }
  // If the user's BMI is between 30.00 and 39.9 run this line:
   else if (imcTotal >= 30.00 && imcTotal <= 39.99) {
    result.innerHTML = `<p> Your BMI is: <strong> ${imcTotal} </strong> - You are considered "Obese". &#128559;  </p>`
  } 
  // If the user's BMI is greater than 40.00, run this line:
   else if (imcTotal >= 40.00) {
    result.innerHTML = `<p> Your BMI is: <strong> ${imcTotal} </strong> - Your classification is "Severely obese",
    in a third degree of obesity. You need help? &#x1F630;  </p>`
  }
  // If the user's BMI is none previously shown (normally zero), execute this line:
   else {
    result.innerHTML = `<p> Your BMI is: <strong> 0 </strong> -Something is not right... &#x1F61C;</p>`
  }
} 

// When pressing the button, execute the "resultforms" function
form.addEventListener('submit', resultforms)
