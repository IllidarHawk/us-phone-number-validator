const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkSequence = (value) => {
  const validFormat = /^[1]?[\s]?([(])?[0-9]{3}([)])?[-|\s]?[0-9]{3}[-|\s]?[0-9]{4}$/;
  
  const isValid = value.match(validFormat);

  return isValid ? parenthesesChecker(isValid) : isValid
}

const parenthesesChecker = (str) => {
  if (str[1] === "(" && str[2] === ")") {
    return true;
  } else if ( str[1] === undefined && str[2] === undefined ) {
    return true;
  } else {
    return false;
  }
}

const reset = () => {
  userInput.value = "";
  result.textContent = "";
  result.parentElement.classList.add("hidden");

}

const validator = () => {
  const userInputValue = userInput.value;
  const onlySpacesInput = userInputValue.replace(/\s/, "");
  if (onlySpacesInput === "") {
    alert("Please provide a phone number");
    return;
  }

  if (checkSequence(userInputValue)) {
    result.textContent = "Valid US number: " + userInputValue;
  } else {
    result.textContent = "Invalid US number: " + userInputValue;
  }
  
  result.parentElement.classList.remove("hidden");
}

checkBtn.addEventListener('click', validator);

clearBtn.addEventListener('click', reset);

userInput.addEventListener('keydown', (e) => {
    if (e.key === "Enter") { validator}
})

