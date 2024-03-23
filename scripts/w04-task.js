/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
  name: 'Harold Carazas',
  photo: 'images/harold_carazas.jpg',
  favoriteFoods: ['Lasagna', 'Fetuccini', 'Ravioli', 'Macaroni and Cheese'],
  hobbies: ['Music', 'Football', 'Videogames', 'Programming'],
  placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({ city: 'Huancayo', length: '1 year' });
myProfile.placesLived.push({ city: 'Huánuco', length: '3 months' });
myProfile.placesLived.push({ city: 'Satipo', length: '6 months' });

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  const li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  const li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  const dt = document.createElement('dt');
  dt.textContent = place.city;

  const dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
