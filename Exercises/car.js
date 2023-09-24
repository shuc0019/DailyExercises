const SERVER_URL = "http://localhost:4444/api/cars"

document.getElementById("btn-get-all").addEventListener("click",getAllCars)

document.getElementById("btn-find-car").addEventListener("click",getACar)

document.getElementById("add-car").addEventListener("click",addCar)
 // Add an event listener for the "Find item to edit" button
 document.getElementById("btn-find-car-to-edit").addEventListener("click", findCarToEdit);

 // Add an event listener for the "Submit edited item" button
 document.getElementById("btn-submit-edited-item").addEventListener("click", submitEditedCar);


function getACar(){
  const id = document.getElementById("text-for-id").value
  fetch(SERVER_URL+"/"+id)
     .then(res=>{
        if(!res.ok){
          return alert("Car Not Found")
        }
        return res.json()
     })
     .then(car=> {
        document.getElementById("found-car").innerText = JSON.stringify(car,null,2)
    })
}

function addCar(evt) {
    evt.preventDefault()
    const form = document.getElementById('carForm');
    const newCar = {
      brand: form.brand.value,
      model: form.model.value,
      pricePrDay: parseFloat(form.pricePrDay.value),
      bestDiscount: parseInt(form.bestDiscount.value),
    };

    const options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newCar)
      }


      fetch(SERVER_URL, options)
        .then(res => res.json())
        .then(carRespons => {
          document.getElementById("new-car-response").innerText = JSON.stringify(carRespons, null, 3)
        })
    }
    
    
  

function getAllCars(){
    fetch (SERVER_URL)
    .then(res => res.json())
    .then(cars => {
        const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
        `);

        const rowsAsStr = tableRows.join("");
        document.getElementById("tbody").innerHTML = rowsAsStr; // Remember XSS
        
    })}

   