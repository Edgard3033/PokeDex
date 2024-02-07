const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemonList(url = baseUrl) {
  try {
    const response = await fetch(url);
    const list = await response.json();
    return list;
  } catch (error) {
    console.error(error);
  }
}

fetchPokemonList();
