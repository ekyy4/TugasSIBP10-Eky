let form = document.getElementById("product");
let endpoint = 'https://crudcrud.com/api/af6aa471722f4207a5d7c97ea27cb030/users';
let konten = document.getElementById('konten');


// function changeColor() {
//   document.body.classList.toggle("highlight");
// }

// function greet() {
//   var name = prompt("Masukkan Nama Anda:");
//   if (name != null && name != "") {
//     alert("Halo, " + name + "! Selamat datang");
//   }
// }

function showAlert() {
  alert("Selamat datang!");
}

// function calculate() {
//   var num1 = parseFloat(document.getElementById("num1").value);
//   var num2 = parseFloat(document.getElementById("num2").value);
//   var operator = document.getElementById("operator").value;
//   var result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//       } else {
//         document.getElementById("result").innerText = "Tidak bisa dibagi";
//         return;
//       }
//       break;
//     default:
//       document.getElementById("result").innerText = "Hasil: " + result;
//       return;
//   }
//   alert("Hasil: " + result);
// }

// Fungsi Login dan register
document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".login-form");
  let registerBtn = document.getElementById("register-btn");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
    alert("Berhasil Login");
  });

  registerBtn.addEventListener("click", function () {
    window.location.href = "form.html";
  });
});

// Fungsi input produk ke API

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  let requestData = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  };

  try {
    let response = await fetch(endpoint, requestData);
    let data = await response.json();
    console.log("Data ditambahkan", data);
    alert("Data berhasil ditambahkan!");
    form.reset();
  } catch (error) {
    console.error("error: ", error);
  }
});

function loadData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {

      let datas = res.data

      // untuk menampilkan data kedalam card
      datas.array.forEach(element => {

        konten.innerHTML = `
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        ` + konten.innerHTML;
        
        console.log(element);
      });

      
    });
}

