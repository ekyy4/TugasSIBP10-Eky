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

// Product API
// URL endpoint dari API yang ingin Anda gunakan
// let apiUrl = "https://crudcrud.com/api/221d30a3bab34a14ad98dedf591ea45b";

// // Lakukan HTTP GET request menggunakan fetch()
// fetch(apiUrl)
//   .then((response) => {
//     // Periksa apakah responsenya adalah OK (status code 200)
//     if (response.ok) {
//       // Jika OK, parse responsenya ke dalam bentuk JSON
//       return response.json();
//     }
//     throw new Error("Failed to fetch API data");
//   })
//   .then((apiData) => {
//     // Simpan data API ke dalam variabel
//     const apiVariable = apiData;
//     console.log(apiVariable); // Outputkan data API yang telah disimpan dalam variabel
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Setelah beberapa waktu atau saat Anda butuh mengganti API, Anda dapat mengubah nilai apiUrl
// Contoh mengganti API dengan URL endpoint yang baru
//apiUrl = "https://api.newexample.com/data";

// function loadData(){
//     let endpoint = `https://crudcrud.com/api/221d30a3bab34a14ad98dedf591ea45b/users`;

//     fetch(endpoint)
//         .then((response) => response.json())
//         .then((apiData) => {
//             let output = ' ';
//             let no = 1;
//             apiData.forEach(element => {
//                 output += `
//                 <tr>
//                     <td>` + (no++) + `</td>
//                     <td>${element.nim}</td>
//                     <td>${element.nama}</td>
//                     <td>${element.fakultas}</td>
//                     <td>${element.prodi}</td>
//                 </tr>
//                 `
//                 //console.log(element)
//             });
//             document.querySelector('tbody').innerHTML = output

            
//         });
// }
// loadData();


// const form = document.getElementById('product');
// let endpoint = `https://crudcrud.com/api/221d30a3bab34a14ad98dedf591ea45b/users`;

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const requestData = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(Object.fromEntries(formData)),
//   };

//   try {
//     let response = await fetch(endpoint, requestData);
//     let data = await response.json();
//     console.log('Data ditambahkan', data);
//     alert('Data berhasil ditambahkan!');
//     form.reset();
//   } catch (error) {
//     console.error('error: ', error);
//   }
// });
