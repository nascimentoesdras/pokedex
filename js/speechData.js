const synth = window.speechSynthesis;

export const speakPokemonData = (dataByIdOrName) => {

    // Destructure the data

    const { name, types, abilities, stats } = dataByIdOrName;

    // cancel any ongoing speech synthesis before starting a new one
    synth.cancel();
    

    // This button will be used to trigger the speech synthesis
    const playButton = document.querySelector('#play');

    // Translate habilidades to Portuguese if they are in English
    const habilidades = [];

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

    // Make a custom text-to-speech message based on the pokemon's data

    const speechTipoTexto = []

    const tipoTexto = {
        'Normal': "esse pokemon é do tipo normal. Versátil e adaptável, possui uma grande variedade de ataques e se dá bem em praticamente qualquer ambiente. Costuma ter um temperamento dócil e adora conviver próximo a humanos e outros Pokémon.",
        'Fogo': "esse pokemon é do tipo fogo. Suas chamas internas ardem com mais força quando está entusiasmado ou em batalha. Este Pokémon prefere ambientes quentes e secos, e costuma demonstrar afeto liberando pequenas fagulhas de calor.",
        'Áquático': "esse pokemon é do tipo água. Excelente nadador, ele consegue manipular jatos de água e se adaptar com facilidade a rios e oceanos. Geralmente é visto descansando à beira da água ao sol ou nadando em grandes cardumes.",
        'Grama': "esse pokemon é do tipo grama. Ele absorve a luz do sol para acumular energia e realizar fotossíntese. É um Pokémon muito ligado à natureza, que costuma viver em florestas densas e prefere locais calmos e ensolarados.",
        'Elétrico': "esse pokemon é do tipo elétrico. Capaz de armazenar e descarregar altas voltagens através de seu corpo. Ele tende a ficar agitado durante tempestades e prefere habitats próximos a campos abertos ou fontes de energia.",
        'Gelo': "esse pokemon é do tipo gelo. Consegue congelar a umidade do ar ao seu redor em questão de segundos. Viver em temperaturas congelantes é sua especialidade, e ele adora deslizar sobre superfícies de gelo.",
        'Lutador': "esse pokemon é do tipo lutador. Com uma força física impressionante, passa a maior parte do dia treinando suas técnicas de combate. É altamente disciplinado e costuma procurar oponentes fortes para testar seus limites.",
        'Venenoso': "esse pokemon é do tipo venenoso. Capaz de secretar toxinas poderosas para se defender de ameaças. Embora pareça intimidador, costuma ser cauteloso e prefere habitats úmidos, pântanos ou áreas sombrias.",
        'Terrestre': "esse pokemon é do tipo terrestre. Possui uma conexão profunda com a terra e consegue cavar túneis com facilidade impressionante. Prefere desertos, montanhas e solos rochosos, onde se sente seguro e firme.",
        'Voador': "esse pokemon é do tipo voador. Mestre dos céus, possui excelente visão e consegue planar por horas aproveitando as correntes de ar. Prefere viver no topo de árvores altas ou penhascos íngremes.",
        'Psíquico': "esse pokemon é do tipo psíquico. Utiliza poderes telecinéticos para flutuar e prever os movimentos de seus oponentes antes mesmo de acontecerem. É uma criatura de grande inteligência que prefere locais calmos para meditar e concentrar sua mente.",
        'Inseto': "esse pokemon é do tipo inseto. Conhecido por seu desenvolvimento rápido e habilidades de camuflagem na vegetação. É muito curioso, vive em grandes grupos em florestas e passa a maior parte do tempo procurando alimentos doces.",
        'Pedra': "esse pokemon é do tipo pedra. Sua carcaça rígida como rocha garante uma defesa quase impenetrável contra ataques físicos. Prefere cavernas e montanhas distantes, onde gosta de se camuflar entre as rochas.",
        'Fantasma': "esse pokemon é do tipo fantasma. Consegue atravessar objetos sólidos e pregar peças atravessando sombras sem fazer barulho. Habita locais abandonados ou escuros e adora assustar viajantes distraídos apenas por diversão.",
        'Dragão': "esse pokemon é do tipo dragão. Uma criatura lendária por sua força devastadora e aura majestosa. Costuma viver em locais isolados e difíceis de alcançar, aceitando como treinadores apenas aqueles que demonstram grande coragem.",
        'Sombrio': "esse pokemon é do tipo sombrio. Um caçador astuto que se move com perfeição sob a luz da lua. É extremamente leal ao seu grupo, preferindo agir à noite quando seus sentidos estão ainda mais afiados.",
        'Aço': "esse pokemon é do tipo aço. Seu corpo é coberto por uma liga metálica extremamente resistente que reflete a luz. Costuma habitar áreas ricas em minérios e tem uma resistência impressionante a diversos tipos de ataque.",
        'Fada': "esse pokemon é do tipo fada. Possui uma energia mística capaz de acalmar até os Pokémon mais agressivos. Costuma viver em florestas encantadas e clareiras, trazendo alegria e boa sorte para quem o encontra."
    }

    types.forEach(type => {
        switch (type.type.name) {
            case 'normal':
                speechTipoTexto.push(tipoTexto['Normal']);
                break;
            case 'fire':
                speechTipoTexto.push(tipoTexto['Fogo']);
                break;
            case 'water':
                speechTipoTexto.push(tipoTexto['Áquático']);
                break;
            case 'grass':
                speechTipoTexto.push(tipoTexto['Grama']);
                break;
            case 'electric':
                speechTipoTexto.push(tipoTexto['Elétrico']);
                break;
            case 'ice':
                speechTipoTexto.push(tipoTexto['Gelo']);
                break;
            case 'fighting':
                speechTipoTexto.push(tipoTexto['Lutador']);
                break;
            case 'poison':
                speechTipoTexto.push(tipoTexto['Venenoso']);
                break;
            case 'ground':
                speechTipoTexto.push(tipoTexto['Terrestre']);
                break;
            case 'flying':
                speechTipoTexto.push(tipoTexto['Voador']);
                break;
            case 'psychic':
                speechTipoTexto.push(tipoTexto['Psíquico']);
                break;
            case 'bug':
                speechTipoTexto.push(tipoTexto['Inseto']);
                break;
            case 'rock':
                speechTipoTexto.push(tipoTexto['Pedra']);
                break;
            case 'ghost':
                speechTipoTexto.push(tipoTexto['Fantasma']);
                break;
            case 'dragon':
                speechTipoTexto.push(tipoTexto['Dragão']);
                break;
            case 'dark':
                speechTipoTexto.push(tipoTexto['Sombrio']);
                break;
            case 'steel':
                speechTipoTexto.push(tipoTexto['Aço']);
                break;
            case 'fairy':
                speechTipoTexto.push(tipoTexto['Fada']);
                break;
            default:
                speechTipoTexto.push(tipoTexto[type.type.name]);
        }
    });


    const tts = `${name}. ${speechTipoTexto.join(', ')}. 
    Suas habilidades são: ${habilidades.join(', ')}. 
    E estes são seus status iniciais: 
    vida ${stats[0].base_stat}, 
    ataque ${stats[1].base_stat}, 
    defesa ${stats[2].base_stat}, 
    ataque especial ${stats[3].base_stat}, 
    defesa especial ${stats[4].base_stat}, 
    velocidade ${stats[5].base_stat}.`;

    const utterance = new SpeechSynthesisUtterance(tts);
    utterance.rate = 1.2;
    utterance.pitch = 1.2;
    utterance.lang = 'pt-BR';

    playButton.onclick = () => {
        synth.speak(utterance);
    };
};