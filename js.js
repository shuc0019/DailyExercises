const SERVERURL = "http://127.0.0.1:5500/car.html"
const cars = fetch(SERVERURL)
.then(Response=>{return Response.json()
}).then(data=>{
    console.log(JSON.stringify(data))
})


document.getElementById("btn-get-all").addEventListener("click", getAllCars)
document.getElementById("btn-find-car").addEventListener("click", getCar)
document.getElementById("add-car").addEventListener("click", addCar)




function getAllCars(){
    fetch(SERVERURL)
    .then(response => response.json())
    .then(cars => {
        const tableRows = cars.map(car => `
        <tr>
            <td>${car.id}  </td>
            <td>${car.brand}  </td>
            <td>${car.model}  </td>
            <td>${car.pricePrDay}  </td>
            <td>${car.bestDiscount}  </td>

             </tr>
             `  )
        const rowAsStr=tableRows.join("");
        document.getElementById("tbody").innerHTML = rowAsStr;
        console.log(rowAsStr);
        
})}

function getCar() {
    const id = document.getElementById("text-for-id").value
    fetch(SERVERURL + "/" + id)
      .then(res => {
        if (!res.ok) {
          return alert("Car Not Found")
        }
        return res.json()
      })
      .then(car => {
        document.getElementById("found-car").innerText = JSON.stringify(car, null, 2)
  
  
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
  fetch(SERVERURL, options)
    .then(res => res.json())
    .then(carRespons => {
      document.getElementById("new-car-response").innerText = JSON.stringify(carRespons, null, 3)
    })
  }

  
          
        

