
import { SERVER_URL } from "../../settings.js"

//const cachedCars = []

// Import any necessary functions or modules here

// Function to fetch and display all cars
export async function initAllCars() {
  try {
    // Assuming you have an API endpoint to fetch a list of cars
    const response = await fetch(SERVER_URL); // Replace with your actual API endpoint
    const data = await response.json();

    // Get the car list container
    const carList = document.getElementById('car-list');

    // Clear any existing list items
    carList.innerHTML = '';

    // Iterate through the list of cars and create list items
    data.forEach((car) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${car.make} ${car.model}`;
      carList.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching and displaying cars:', error);
  }
}

/*
fetch(SERVER_URL)
    .then(res => res.json())
    .then(cars => {
      const listItems = cars.map(car => `
        <li>${car.id} , ${car.brand} </li>
    `).join("")
    document.getElementById("cars").innerHTML = listItems //Remember
    })
    */
