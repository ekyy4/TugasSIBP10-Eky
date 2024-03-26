function changeColor() {
  document.body.classList.toggle("highlight");
}

function greet() {
  var name = prompt("Masukkan Nama Anda:");
  if (name != null && name != "") {
    alert("Halo, " + name + "! Selamat datang");
  }
}

function showAlert() {
  alert("Selamat datang!");
}

function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        document.getElementById("result").innerText = "Tidak bisa dibagi";
        return;
      }
      break;
    default:
      document.getElementById("result").innerText = "Hasil: " + result;
      return;
  }
  alert("Hasil: " + result);
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".login-form");
  let registerBtn = document.getElementById("register-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  registerBtn.addEventListener("click", function () {
    window.location.href = "form.html";
  });
});
