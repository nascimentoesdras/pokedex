import { speakPokemonData } from './speechData.js';
const results = document.querySelector('#results');
const pokemonDetails = document.querySelector('#pokemon-details');

export const displayPokemon = (dataByIdOrName) => {

    const { id, 
        name, 
        base_experience, 
        height, 
        weight, 
        sprites,
        types, 
        stats, 
        abilities 
    } = dataByIdOrName;

    //const { is_legendary, is_mythical, names } = speciesData;
    

    const tipo = [];
    const tipoIcones = [];
    const habilidades = [];
    const alturaMetroCent = [];
    const pesoKg = weight / 10;
    //const isLegendary = [];
    //const isMythical = [];

    // Check if the Pokemon is legendary or mythical and store the result in arrays
    //if (is_legendary === true) {
    //    isLegendary.push('Sim');
    //} else {
    //    isLegendary.push('Não');
    //}


    /*if (is_mythical === true) {
        isMythical.push('Sim');
    } else {
        isMythical.push('Não');
    }*/

    // Mapeamento e tradução de tipos para português, ícones e bg colors
    types.forEach(type => {
        switch (type.type.name) {
            case 'normal':
                tipo.push('Normal');
                tipoIcones.push('⚪');
                break;
            case 'fire':
                tipo.push('Fogo');
                tipoIcones.push('🔥');
                break;
            case 'water':
                tipo.push('Água');
                tipoIcones.push('💧');
                break;
            case 'grass':
                tipo.push('Grama');
                tipoIcones.push('🌿');
                break;
            case 'electric':
                tipo.push('Elétrico');
                tipoIcones.push('⚡');
                break;
            case 'ice':
                tipo.push('Gelo');
                tipoIcones.push('❄️');
                break;
            case 'fighting':
                tipo.push('Lutador');
                tipoIcones.push('🥊');
                break;
            case 'poison':
                tipo.push('Venenoso');
                tipoIcones.push('☠️');
                break;
            case 'ground':
                tipo.push('Terra');
                tipoIcones.push('🌍');
                break;
            case 'flying':
                tipo.push('Voador');
                tipoIcones.push('🦅');
                break;
            case 'psychic':
                tipo.push('Psíquico');
                tipoIcones.push('🔮');
                break;
            case 'bug':
                tipo.push('Inseto');
                tipoIcones.push('🐛');
                break;
            case 'rock':
                tipo.push('Pedra');
                tipoIcones.push('🪨');
                break;
            case 'ghost':
                tipo.push('Fantasma');
                tipoIcones.push('👻');
                break;
            case 'dragon':
                tipo.push('Dragão');
                tipoIcones.push('🐉');
                break;
            case 'dark':
                tipo.push('Sombrio');
                tipoIcones.push('🌑');
                break;
            case 'steel':
                tipo.push('Aço');
                tipoIcones.push('🔩');
                break;
            case 'fairy':
                tipo.push('Fada');
                tipoIcones.push('🧚');
                break;
            default:
                tipo.push(type.type.name);
        }
    });

    // Mapeamento e tradução de habilidades para português
    abilities.forEach(ability => {
        switch (ability.ability.name) {
            case 'overgrow':
                habilidades.push('Espalhar');
                break;
            case 'blaze':
                habilidades.push('Chama');
                break;
            case 'torrent':
                habilidades.push('Torrente');
                break;
            case 'shield-dust':
                habilidades.push('Pó de Escudo');
                break;
            case 'run-away':
                habilidades.push('Fuga');
                break;
            case 'keen-eye':
                habilidades.push('Olho Vivo');
                break;
            case 'tangled-feet':
                habilidades.push('Pés Emaranhados');
                break;
            case 'big-pecks':
                habilidades.push('Grandes Bicos');
                break;
            case 'chlorophyll':
                habilidades.push('Clorofila');
                break;
            case 'solar-power':
                habilidades.push('Poder Solar');
                break;
            case 'static':
                habilidades.push('Estático');
                break;
            case 'lightning-rod':
                habilidades.push('Para-Raios');
                break;
            case 'sand-veil':
                habilidades.push('Véu de Areia');
                break;
            case 'sand-rush':
                habilidades.push('Corrida na Areia');
                break;
            case 'sand-force':
                habilidades.push('Força da Areia');
                break;
            case 'sand-stream':
                habilidades.push('Corrente de Areia');
                break;
            case 'sand-spit':
                habilidades.push('Cuspir Areia');
                break;
            case 'sand-veil':
                habilidades.push('Véu de Areia');
                break;
            case 'sand-rush':
                habilidades.push('Corrida na Areia');
                break;
            case 'sand-force':
                habilidades.push('Força da Areia');
                break;
            case 'sand-stream':
                habilidades.push('Corrente de Areia');
                break;
            case 'sand-spit':
                habilidades.push('Cuspir Areia');
                break;
            case 'soundproof':
                habilidades.push('À Prova de Som');
                break;
            case 'filter':
                habilidades.push('Filtro');
                break;
            case 'prankster':
                habilidades.push('Brincalhão');
                break;
            case 'infiltrator':
                habilidades.push('Infiltrador');
                break;
            case 'magic-bounce':
                habilidades.push('Reflexo Mágico');
                break;
            case 'magic-guard':
                habilidades.push('Guarda Mágica');
                break;
            case 'levitate':
                habilidades.push('Levitar');
                break;
            case 'intimidate':
                habilidades.push('Intimidação');
                break;
            case 'synchronize':
                habilidades.push('Sincronizar');
                break;
            case 'inner-focus':
                habilidades.push('Foco Interno');
                break;
            case 'vital-spirit':
                habilidades.push('Espírito Vital');
                break;
            case 'pressure':
                habilidades.push('Pressão');
                break;
            case 'unnerve':
                habilidades.push('Inquietação');
                break;
            case 'frisk':
                habilidades.push('Farejar');
                break;
            case 'pickpocket':
                habilidades.push('Bolsão');
                break;
            case 'prankster':
                habilidades.push('Brincalhão');
                break;
            case 'storm-drain':
                habilidades.push('Drenagem de Tempestade');
                break;
            case 'water-absorb':
                habilidades.push('Absorção de Água');
                break;
            case 'dry-skin':
                habilidades.push('Pele Seca');
                break;  
            case 'hydration':
                habilidades.push('Hidratação');
                break;
            case 'rain-dish':
                habilidades.push('Prato de Chuva');
                break;
            case 'swarm':
                habilidades.push('Enxame');
                break;
            case 'compound-eyes':
                habilidades.push('Olhos Compostos');
                break;
            case 'tinted-lens':
                habilidades.push('Lente Colorida');
                break;
            case 'adaptability':
                habilidades.push('Adaptabilidade');
                break;
            case 'technician':
                habilidades.push('Técnico');
                break;
            case 'sheer-force':
                habilidades.push('Força Bruta');
                break;
            case 'skill-link':
                habilidades.push('Ligação de Habilidade');
                break;
            case 'aftermath':
                habilidades.push('Consequência');
                break;
            case 'moxie':
                habilidades.push('Audácia');
                break;
            case 'multiscale':
                habilidades.push('Multiescala');
                break;
            case 'regenerator':
                habilidades.push('Regenerador');
                break;
            case 'magic-bounce':
                habilidades.push('Reflexo Mágico');
                break;
            case 'magic-guard':
                habilidades.push('Guarda Mágica');
                break;
            case 'marvel-scale':
                habilidades.push('Escala Maravilhosa');
                break;
            case 'shed-skin':
                habilidades.push('Troca de Pele');
                break;
            case 'wonder-skin':
                habilidades.push('Pele Maravilhosa');
                break;
            default:
                habilidades.push(ability.ability.name);   
        }
    });

    if (height / 10 < 1){
        alturaMetroCent.push(`${height * 10} cm`);  
    } else {
        alturaMetroCent.push(`${height / 10} m`);
    }

    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    pokemonCard.setAttribute('data-type', tipo[0]);

    pokemonCard.innerHTML = `
        <div class="pokemon-types">
            <div class="pokemon-type-icons">${tipoIcones.join(' ')}</div>
            <div class="pokemon-id">#${id}</div>
        </div>

        <img class="pokemon-image" src="${sprites.other.home.front_default}" alt="${name}">
        
        <h2 class="pokemon-title">${name}</h2>
    `;  

    const showPokemonDetails = () => {
        const pokemonDetailsTemplate = `
        <div class="pokemon-details">
            <h2 class="pokemon-details-title">${name} #${id} <p id="play" class="animate__animated animate__headShake animate__infinite">▶️</p></h2>
            <div class="pokemon-types">
                <div class="pokemon-details-tipo">${tipo.join(' ')}</div>
            </div>

            <div class="pokemon-stats">
                <canvas id="pokemon-stats-chart" width="300" height="300"></canvas>
            </div>
        </div>`;

        pokemonDetails.innerHTML = pokemonDetailsTemplate;
    };

    const showPokemonStatsChart = () => {
       // define um gráfico do tipo radar para exibir as estatísticas do Pokémon
        const ctx = document.getElementById('pokemon-stats-chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: stats.map(stat => stat.stat.name),
                datasets: [{
                    label: `${name} Stats`,
                    data: stats.map(stat => stat.base_stat),
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        suggestedMin: 0,
                        suggestedMax: 100,

                        ticks: {
                            display: false
                        },
                        pointLabels: {
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

    pokemonCard.addEventListener('click', () => {
        showPokemonDetails();
        speakPokemonData(dataByIdOrName);
        showPokemonStatsChart();
    });

    
    

    //Display the Pokemon card in the results container
    results.appendChild(pokemonCard);
}