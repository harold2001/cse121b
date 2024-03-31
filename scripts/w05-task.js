/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = list => {
  list.forEach(element => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = element.templeName;

    const image = document.createElement('img');
    image.setAttribute('src', element.imageUrl);
    image.setAttribute('alt', element.location);

    article.appendChild(h3);
    article.appendChild(image);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    'https://byui-cse.github.io/cse121b-ww-course/resources/temples.json'
  );
  const data = await response.json();
  templeList = data;
  displayTemples(data);
};

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = temples => {
  reset();
  let filter = document.querySelector('#filtered').value;

  console.log(templeList);
  let filtered;
  switch (filter) {
    case 'utah':
      filtered = temples.filter(temple => temple.location.includes('Utah'));
      displayTemples(filtered);
      break;
    case 'notutah':
      filtered = temples.filter(temple => !temple.location.includes('Utah'));
      displayTemples(filtered);
      break;
    case 'older':
      filtered = temples.filter(
        temple => new Date(temple.dedicated) < new Date(1950, 0, 1)
      );
      displayTemples(filtered);
      break;
    case 'all':
      displayTemples(temples);
      break;
  }
};

getTemples();

/* Event Listener */
document
  .querySelector('#filtered')
  .addEventListener('change', () => filterTemples(templeList));
