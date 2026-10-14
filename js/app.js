import { displayPokemon } from "./displayData.js";

const input = document.querySelector('#input');
const search = document.querySelector('#search');
const results = document.querySelector('#results');

// Function to fetch Pokemon data
const fetchPokemon = async (pokemon, clearScreen = true) => {

    if (clearScreen && results) {
        results.innerHTML = '';
    }

    // Base URL for the PokeAPI
    const pokeApi = "https://pokeapi.co/api/v2/";

    // implement cache in localStorage to avoid unnecessary API calls
    const cacheKey = `pokemon_${pokemon.toLowerCase()}`;

    const cachedData = sessionStorage.getItem(cacheKey);

    if (cachedData) {
        const dataByIdOrName = JSON.parse(cachedData);
        
        // destructure the data
        const { id, name, sprites, types, stats, abilities } = dataByIdOrName;
        console.log(`Dados do Pokémon ${name} carregados do cache.`);

        displayPokemon(dataByIdOrName); // Call displayPokemon with cached data
        return dataByIdOrName;
    } else {
        console.log(`Buscando dados do Pokémon ${pokemon} na API...`);
    }

    try {
        // Fetch Pokemon data
        const response = await fetch(`${pokeApi}pokemon/${pokemon.toLowerCase()}`);
        if (!response.ok) {
            throw new Error('Pokemon não encontrado');
        }
        const data = await response.json();
      
        displayPokemon(data); // Call displayPokemon with fetched data
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    } catch (error) {
        console.error(error);
        return null;
    };
};

// Funtion to load initial Pokemon data
const  loadInitialPokemon = async (limit=100, offset=0) => {
    const pokeApi = "https://pokeapi.co/api/v2/";
    try {
        const response = await fetch(`${pokeApi}pokemon?limit=${limit}&offset=${offset}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar a lista de Pokémons');
        }
        const data = await response.json();
        
        const pokemonPromises = data.results.map(pokemon => fetchPokemon(pokemon.name, false));
        await Promise.all(pokemonPromises);
    } catch (error) {
        console.error('Erro ao buscar a lista de Pokémons:', error);
        return null;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadInitialPokemon(20, 0); // Load the first 20 Pokemon on page load
});

// Auxiliar Function to handle the search button click and Enter key press events
const handleSearch = () => {
    const pokemon = input.value.trim();
    if (pokemon) {
        fetchPokemon(pokemon, true);
    } else {
        if (results) results.innerHTML = '';
        loadInitialPokemon(20, 0); // Load the first 20 Pokemon if input is empty
    }
}

// Get Pokemon name from the input field and fetch data
search.addEventListener('click', handleSearch);

// Get Pokemon name from the input field 
// and fetch data on Enter key press
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();     
    }
});

input.addEventListener('input', () => {
    if (input.value.trim() === '') {
        if (results) results.innerHTML = '';
        loadInitialPokemon(20, 0); // Load the first 20 Pokemon if input is empty
    }
});