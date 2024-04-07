import {
  filterPokemonsByName,
  filterPokemonsByType,
  getPokemons,
  getTypes,
  sortPokemonsByName,
  splitPokemons,
} from './model.js';
import {
  getCards,
  getNotFound,
  getOptions,
  removeLoader,
  setLoader,
} from './view.js';

const cardsContainer = document.getElementById('cards-container');
const selectType = document.getElementById('selectType');
const inputName = document.getElementById('inputName');
const selectSort = document.getElementById('selectSort');
const selectShow = document.getElementById('selectShow');
let actualAmount = 10;

function resetSelects(except) {
  selectType.selectedIndex =
    except !== 'selectType' ? 0 : selectType.selectedIndex;
  selectSort.selectedIndex =
    except !== 'selectSort' ? 0 : selectSort.selectedIndex;
  selectShow.selectedIndex =
    except !== 'selectShow' ? 0 : selectShow.selectedIndex;
}

function setContent(pokemons, exceptSelect) {
  setLoader();
  const newContent = pokemons.length === 0 ? getNotFound() : getCards(pokemons);
  cardsContainer.innerHTML = newContent;
  resetSelects(exceptSelect);
  removeLoader();
}

function setPokemons() {
  setLoader();
  getPokemons(actualAmount, pokemons => {
    cardsContainer.innerHTML = getCards(pokemons);
    removeLoader();
  });
}

getTypes(types => {
  selectType.innerHTML += getOptions(types);
  setPokemons();
});

inputName.addEventListener('input', e => {
  const filtered = filterPokemonsByName(e.target.value);
  setContent(filtered, '');
});

selectType.addEventListener('change', e => {
  const filtered = filterPokemonsByType(e.target.value);
  setContent(filtered, 'selectType');
});

selectSort.addEventListener('change', e => {
  const sortedPokemons = sortPokemonsByName(e.target.value.toLowerCase());
  setContent(sortedPokemons, 'selectSort');
});

selectShow.addEventListener('change', e => {
  const newAmount = parseInt(e.target.value);

  if (newAmount < actualAmount) {
    const splitted = splitPokemons(newAmount);
    setContent(splitted, 'selectShow');
  } else if (newAmount > actualAmount) {
    actualAmount = newAmount;
    setPokemons();
  }
});
