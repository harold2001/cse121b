const myList = document.querySelector("#myList");

// Activity 1
const arr = ["one", "two", "three"];

const stepsHtml = arr.map(function (string) {
  return `<li>${string}</li>`;
});

myList.innerHTML = stepsHtml.join("");

// Activity 2
const letterGrades = ["A", "B", "A"];

function grade(letter) {
  let points = 0;

  if (letter === "A") {
    points = 4;
  } else if (letter === "B") {
    points = 3;
  }

  return points;
}

const gpaPoints = letterGrades.map(grade);

// Activity 3
const totalPoints = gpaPoints.reduce((acc, point) => (acc += point), 0);
const gpa = totalPoints / gpaPoints.length;

// Activity 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const fruitsFiltered = fruits.filter((fruit) => fruit.length > 6);

// Activity 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = numbers.indexOf(luckyNumber);
