let input = document.getElementById("input"),
  number = document.querySelectorAll(".numbers div"),
  operator = document.querySelectorAll(".operators div"),
  result = document.getElementById("result"),
  clear = document.getElementById("clear"),
  arrow = document.querySelector("arrow");
(resultDisplayed = true), (strResult = "");

// all button
number.forEach((el) =>
  el.addEventListener("click", function () {
    if (resultDisplayed) {
      change(this.dataset.value);
    } else {
      input.textContent = "";
      change(this.dataset.value);
      resultDisplayed = true;
    }
  })
);

// equal button
result.addEventListener("click", function () {
  //to check if any of operator first
  if (
    strResult[0] == "+" ||
    strResult[0] == "*" ||
    strResult[0] == "/" ||
    strResult[0] == "-" ||
    strResult[0] == "**"
  ) {
    alert("please write a Number first");
    strResult = "";
    input.innerHTML = "";
  }

  input.textContent = eval(strResult).toFixed(5);
  strResult = "";
  resultDisplayed = false;
});

// clearing the input on press of clear
clear.addEventListener("click", function () {
  input.innerHTML = "";
  strResult = "";
});

function change(val) {
  //to make arrow function
  if (val === "delete") {
    strResult = strResult.slice(0, -1);
    input.textContent = input.textContent.slice(0, -1);
  } else {
    strResult += val;
  }

  //change cases
  switch (val) {
    case "*":
      val = "×";
      break;
    case "/":
      val = "÷";
      break;
    case "**2":
      val = "²";
      break;
    case "delete":
      val = "";
      break;
  }

  //   adding in text
  input.textContent += val;
}
