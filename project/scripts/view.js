function getCard(data) {
  const { id, name, sprites, types } = data;
  const typesHtml = types.reduce(
    (acc, t) => (acc += `<span>${t.type.name}</span>`),
    ''
  );
  return `
      <div class="card">
          <div class="card-img-container">
              <img src="${sprites.front_default}" alt="Pokemon" />
          </div>
          <div class="card-text-container">
              <span>#${id}</span>
              <p>${name}</p>
              <div class="card-types-container">
              ${typesHtml}
              </div>
          </div>
      </div>
      `;
}

export function getCards(pokemons) {
  return pokemons.reduce((acc, p) => (acc += getCard(p)), '');
}

function getLoader() {
  return `
    <div id="loader">
        <img src="./project/svg/pokeball.svg" alt="" />
    </div>
    `;
}

export function setLoader() {
  document.body.insertAdjacentHTML('beforeend', getLoader());
}

export function removeLoader() {
  document.getElementById('loader')?.remove();
}

export function getNotFound() {
  return `
    <div id="not-found">
      <div>
        <img src="./project/svg/pokenotfound.svg" alt="Not found" />
      </div>
      <p>Pokemon not found</p>
    </div>
    `;
}

export function getOptions(data) {
  return data.reduce(
    (acc, t) => (acc += `<option value="${t.name}">${t.name}</option>`),
    ''
  );
}
