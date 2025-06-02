    document.addEventListener("DOMContentLoaded", function() {

        const Container = document.querySelector(".container");
        const DisplayOutput = document.querySelector(".Display-Output");
        const DisplayInput = document.querySelector(".display-Input");
        const Input = document.querySelector(".input");
        const add = document.getElementById("add");
        const minus = document.getElementById("minus");
        const div = document.getElementById("div");
        const mul = document.getElementById("mul");
        const decimal= document.getElementById("decimal");
        const clear = document.getElementById("button5");
        const Ans = document.getElementById("button10");
        const Back = document.getElementById("back-button");
        const num1 = document.querySelector(".one");
        const num2 = document.querySelector(".two");
        const num3 = document.querySelector(".three");
        const num4 = document.querySelector(".four");
        const num5 = document.querySelector(".five");
        const num6 = document.querySelector(".six");
        const num7 = document.querySelector(".seven");
        const num8 = document.querySelector(".eight");
        const num9 = document.querySelector(".nine");
        const num0 = document.querySelector(".zero");

        //!showing the numbers in the display input
        const numbers = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0];
        let currentInput = "";
        let currentOutput = "";
        numbers.forEach((number) => {
            number.addEventListener("click", function() {
                currentInput += number.textContent;
                DisplayOutput.textContent = currentInput;
            });
        });

        //!showing the add function in the display input
        add.addEventListener("click", function() {
            currentInput += "+";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the minus function in the display input
        minus.addEventListener("click", function() {
            currentInput += "-";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the multiply function in the display input
        mul.addEventListener("click", function() {
            currentInput += "*";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the divide function in the display input
        div.addEventListener("click", function() {
            currentInput += "/";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the decimal function in the display input
        decimal.addEventListener("click", function() {
            currentInput += ".";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the answer function in the display input
        Ans.addEventListener("click", function() {
            if(validateInput()) {
            currentOutput = eval(currentInput);
            DisplayOutput.textContent = currentOutput;
            } 
        });
        //!showing the clear function in the display input
        clear.addEventListener("click", function() {
            currentInput = "";
            DisplayOutput.textContent = currentInput;
        });
        //!showing the back function in the display input
        Back.addEventListener("click", function() {
            currentInput = currentInput.slice(0, -1);
            DisplayOutput.textContent = currentInput;
        });




        

    //! Error handing 
    function validateInput() {
    const OutCome =  DisplayOutput.textContent.trim();
    if (OutCome === '') {
      showError('Please enter a valid expression');
      return false;
    } else {
      hideError();
      return true;
    }
  }

  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);

    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }

  function hideError() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.remove());
  }

});