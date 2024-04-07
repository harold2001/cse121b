let pokemons = [];

export async function getPokemons(amount, callback) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=0`
    );
    const { results } = await response.json();
    const pokemonsPromises = results.map(({ url }) => fetch(url));
    const pokemonResponses = await Promise.all(pokemonsPromises);
    const pokemonData = await Promise.all(
      pokemonResponses.map(res => res.json())
    );
    pokemons = pokemonData;
    console.log(pokemonData);
    callback(pokemonData);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
}

export async function getTypes(callback) {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const { results } = await response.json();
    callback(results);
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
}

export function filterPokemonsByName(name) {
  return pokemons.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
}

export function filterPokemonsByType(type) {
  return type === ''
    ? pokemons
    : pokemons.filter(({ types }) => types.find(t => t.type.name === type));
}

export function sortPokemonsByName(order) {
  return pokemons.sort((a, b) =>
    order === 'a-z'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
}

export function splitPokemons(amount) {
  return pokemons.slice(0, amount);
}
