/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Harold Duane Carazas Mires";
let currentYear = new Date().getFullYear();
let profilePicture = "images/harold_carazas.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#home > picture > img");
const foodElement = document.getElementById('food')

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Lasagna", "Fetuccini", "Ravioli", "Macaroni and Cheese"]
const anotherFood = "Pizza"
foodElement.innerHTML +=`<br>${favoriteFoods}`

favoriteFoods.push(anotherFood)
foodElement.innerHTML +=`<br>${favoriteFoods}`

favoriteFoods.shift()
foodElement.innerHTML +=`<br>${favoriteFoods}`

favoriteFoods.pop()
foodElement.innerHTML +=`<br>${favoriteFoods}`








