const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");


//* CHECK USER INPUT FOR NEEDED FORMAT

const checkSequence = (value) => {
  const validFormat = /^[1\s]?([(])?[0-9]{3}([)])?[-|\s]?[0-9]{3}[-|\s]?[0-9]{4}$/;
  
  const isValid = value.match(validFormat);

  return isValid ? parenthesesChecker(isValid) : isValid
}

const parenthesesChecker = (str) => {
  if ((str[1] === "(" && str[2] === ")") ||
     (str[1] === undefined && str[2] === undefined)){
    return true;
  } else {
    return false;
  }
}

//* CLEAR && HIDE OUTPUT

const reset = () => {
  userInput.value = "";
  result.textContent = "";
  result.parentElement.classList.add("hidden");

}


//* MAIN FUNCTION

const validator = () => {
  const userInputValue = userInput.value;
  const onlySpacesInput = userInputValue.replace(/\s/, "");
  
  // ONLY SPACES USER INPUT
  if (onlySpacesInput === "") {
    alert("Please provide a phone number");
    return;
  }

  if (checkSequence(userInputValue)) {
    result.textContent = "Valid US number";
  } else {
    result.textContent = "Invalid US number";
  }
  
  result.parentElement.classList.remove("hidden");
}

checkBtn.addEventListener('click', validator);

clearBtn.addEventListener('click', reset);

userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") { validator}
})

