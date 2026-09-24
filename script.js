const characters = [
  {
    id: 'ari',
    name: 'Ari',
    title: 'El que escucha',
    symbol: '✦',
    intro: 'sabe escuchar entre los ruidos de la ciudad.'
  },
  {
    id: 'luna',
    name: 'Luna',
    title: 'La que se atreve',
    symbol: '☾',
    intro: 'camina sin miedo hacia lo que aún no entiende.'
  },
  {
    id: 'ren',
    name: 'Ren',
    title: 'El que guarda',
    symbol: '⟡',
    intro: 'lleva secretos como si fueran piedras en el bolsillo.'
  }
];

const randomScenes = [
  'la estación de trenes',
  'el café abandonado',
  'el puerto bajo la lluvia',
  'el callejón de los faroles',
  'el jardín sin nombre'
];

const randomAtmospheres = [
  'El aire huele a metal y memoria.',
  'La noche parece sostener el aliento.',
  'Cada paso deja una sombra distinta.',
  'El mundo parece recordar antes que tú.'
];

const state = {
  selectedCharacter: 'ari',
  trust: 0,
  courage: 0,
  memory: 0,
  currentNode: 'intro',
  chapter: 'Capítulo I · estación de lluvia',
  randomLocation: randomScenes[Math.floor(Math.random() * randomScenes.length)],
  randomAtmosphere: randomAtmospheres[Math.floor(Math.random() * randomAtmospheres.length)]
};

const story = {
  intro: {
    title: 'Estación de la espera',
    speaker: 'Narrador',
    backdrop: 'night',
    status: 'Inicio',
    text: () => `${state.randomAtmosphere} En ${state.randomLocation}, alguien te espera con una frase que nunca antes habías oído: “Si vuelves, te diré la verdad.”`,
    choices: [
      { label: 'Ir a la estación sin mirar atrás', effects: { courage: 3, trust: 1 }, next: 'platform' },
      { label: 'Revisar la nota en el bolsillo', effects: { memory: 4, trust: 1 }, next: 'letter' },
      { label: 'Escuchar el rumor del andén', effects: { trust: 2, courage: 1 }, next: 'whisper' }
    ]
  },
  platform: {
    title: 'Andén 7',
    speaker: 'Ari',
    backdrop: 'rose',
    status: 'Decisión',
    text: 'La última locomotora llega con la luz apagada. La persona a la que buscas te levanta la vista y sonríe como si te conociera desde hace una vida entera.',
    choices: [
      { label: 'Pedirle la verdad sin rodeos', effects: { trust: 3, courage: 2 }, next: 'truth' },
      { label: 'Preguntarle por el nombre que nadie recuerda', effects: { memory: 3, courage: 1 }, next: 'name' },
      { label: 'Quedarte en silencio y observar', effects: { trust: 1, memory: 2 }, next: 'silence' }
    ]
  },
  letter: {
    title: 'La nota en el bolsillo',
    speaker: 'Narrador',
    backdrop: 'gold',
    status: 'Pista',
    text: 'La nota dice: “No te culpes por olvidar. Te dejé una puerta abierta para que eligieras volver.” La tinta aún tiene el calor de una mano que tembló.',
    choices: [
      { label: 'Seguir la pista hasta el reloj', effects: { memory: 3, courage: 2 }, next: 'clock' },
      { label: 'Guardar la nota y confiar en el corazón', effects: { trust: 4, memory: 1 }, next: 'heart' },
      { label: 'Romper la nota y marcharte', effects: { courage: 1, trust: -2 }, next: 'departure' }
    ]
  },
  whisper: {
    title: 'El murmullo del viento',
    speaker: 'Narrador',
    backdrop: 'dawn',
    status: 'Límite',
    text: 'Algo te llama desde la lluvia, no con voz, sino con la sensación de que el mundo está a punto de revelar lo que escondió por años.',
    choices: [
      { label: 'Aceptar la llamada y correr hacia la verdad', effects: { courage: 4, trust: 2 }, next: 'truth' },
      { label: 'Rodear la sombra y esperar', effects: { memory: 2, trust: 1 }, next: 'silence' },
      { label: 'Volver al lugar donde todo empezó', effects: { memory: 3, courage: -1 }, next: 'clock' }
    ]
  },
  truth: {
    title: 'La verdad despierta',
    speaker: 'Personaje',
    backdrop: 'rose',
    status: 'Revelación',
    text: 'Cuando la verdad aparece, no es un castigo: es un espejo. Tú no perdiste a esa persona; la olvidaste con la misma delicadeza con la que alguien aparta una herida para seguir caminando.',
    choices: [
      { label: 'Pedir perdón con la verdad en la boca', effects: { trust: 4, courage: 2 }, next: 'end' },
      { label: 'Elegir seguir adelante sin mirar atrás', effects: { memory: 2, trust: 1 }, next: 'end' },
      { label: 'Quedarte y escuchar la historia completa', effects: { memory: 4, courage: 1 }, next: 'end' }
    ]
  },
  name: {
    title: 'El nombre perdido',
    speaker: 'Ari',
    backdrop: 'night',
    status: 'Recuerdo',
    text: 'El nombre era un hilo de luz. Cuando lo nombraste, la ciudad pareció cambiar de ritmo y todo lo que te había sido ajeno volvió a ser real.',
    choices: [
      { label: 'Decir la verdad en voz alta', effects: { trust: 3, courage: 3 }, next: 'end' },
      { label: 'Guardar el nombre como último secreto', effects: { memory: 4, trust: 2 }, next: 'end' },
      { label: 'Cantar el nombre para que resuene', effects: { courage: 2, trust: 1 }, next: 'end' }
    ]
  },
  silence: {
    title: 'Silencio',
    speaker: 'Narrador',
    backdrop: 'dawn',
    status: 'Pausa',
    text: 'El mundo se queda quieto por un instante. No hay culpa ni solución, solo una pausa que deja elegir qué te duele más: el recuerdo o el miedo a recordarlo.',
    choices: [
      { label: 'Hablar de lo que fue', effects: { trust: 3, memory: 2 }, next: 'end' },
      { label: 'Dejar el pasado donde estaba', effects: { memory: 1, courage: 2 }, next: 'end' },
      { label: 'Dar un paso hacia la persona que te esperaba', effects: { courage: 4, trust: 2 }, next: 'end' }
    ]
  },
  clock: {
    title: 'Reloj de estación',
    speaker: 'Narrador',
    backdrop: 'gold',
    status: 'Conexión',
    text: 'El reloj se para exactamente a la hora en que te fuiste. Ahí aparece la respuesta: no te olvidaste por accidente; te protegiste de un dolor que aún no sabías nombrar.',
    choices: [
      { label: 'Buscar la verdad aunque duela', effects: { courage: 3, memory: 3 }, next: 'end' },
      { label: 'Aceptar lo que fue y seguir', effects: { trust: 2, memory: 2 }, next: 'end' },
      { label: 'Volver a la estación sin prometer nada', effects: { courage: 1, trust: 3 }, next: 'end' }
    ]
  },
  heart: {
    title: 'Cora de la decisión',
    speaker: 'Narrador',
    backdrop: 'rose',
    status: 'Resolución',
    text: 'No hay una respuesta correcta. Solo una forma de vivir con la verdad: elegir seguir, sin convertir la pérdida en una cárcel.',
    choices: [
      { label: 'Dar la mano y empezar de cero', effects: { trust: 4, courage: 3 }, next: 'end' },
      { label: 'Mantener la distancia con respeto', effects: { trust: 2, memory: 2 }, next: 'end' },
      { label: 'Largar la historia y seguir caminando', effects: { courage: 3, memory: 1 }, next: 'end' }
    ]
  },
  departure: {
    title: 'Salida inevitable',
    speaker: 'Narrador',
    backdrop: 'night',
    status: 'Despedida',
    text: 'La nota se convierte en viento y te deja solo con la decisión más difícil: llevarte la verdad o dejarla donde siempre estuvo.',
    choices: [
      { label: 'Volver a buscar la verdad', effects: { courage: 5, memory: 2 }, next: 'end' },
      { label: 'Aceptar el adiós', effects: { trust: 2, memory: 1 }, next: 'end' },
      { label: 'Seguir caminando sin mirar atrás', effects: { courage: 1, trust: 2 }, next: 'end' }
    ]
  }
};

const titleScreen = document.getElementById('titleScreen');
const gameShell = document.getElementById('gameShell');
const sceneBackdrop = document.getElementById('sceneBackdrop');
const dialogueText = document.getElementById('dialogueText');
const speakerName = document.getElementById('speakerName');
const currentStatus = document.getElementById('currentStatus');
const chapterTag = document.getElementById('chapterTag');
const choiceList = document.getElementById('choiceList');
const vignetteEls = document.querySelectorAll('.vignette');
const characterSelect = document.getElementById('characterSelect');
const startGameBtn = document.getElementById('startGameBtn');
const shuffleBtn = document.getElementById('shuffleBtn');

const statEls = {
  trust: document.getElementById('statTrust'),
  courage: document.getElementById('statCourage'),
  memory: document.getElementById('statMemory'),
  storyWeight: document.getElementById('storyWeight')
};

let selectedCharacterId = 'ari';

function updateStats() {
  Object.entries(statEls).forEach(([key, el]) => {
    const value = state[key] ?? 0;
    el.textContent = value;
  });

  const weight = state.trust + state.courage + state.memory;
  statEls.storyWeight.textContent = weight;
}

function renderCharacterSelection() {
  characterSelect.innerHTML = '';

  characters.forEach((character) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'character-card' + (character.id === selectedCharacterId ? ' selected' : '');
    card.innerHTML = `
      <div class="character-card__portrait">${character.symbol}</div>
      <h3>${character.name}</h3>
      <p>${character.title}</p>
      <p>${character.intro}</p>
    `;
    card.addEventListener('click', () => {
      selectedCharacterId = character.id;
      state.selectedCharacter = character.id;
      renderCharacterSelection();
    });
    characterSelect.appendChild(card);
  });
}

function getCharacterProfile() {
  return characters.find((character) => character.id === selectedCharacterId) || characters[0];
}

function updateVignettes(activeIndex) {
  vignetteEls.forEach((el, index) => {
    el.classList.toggle('active', index === activeIndex);
  });
}

function resolveEnding() {
  const leadingStat = Object.entries({ trust: state.trust, courage: state.courage, memory: state.memory })
    .sort((a, b) => b[1] - a[1])[0][0];

  const endings = {
    trust: 'Camino de confianza: elegiste continuar sin encerrar el dolor en una mentira.',
    courage: 'Camino de coraje: enfrentaste la verdad aun sabiendo que cambiaría todo.',
    memory: 'Camino de memoria: recordaste lo importante y lo llevaste contigo sin romperte.'
  };

  return endings[leadingStat] || endings.memory;
}

function renderNode(nodeKey) {
  const node = story[nodeKey];
  if (!node) return;

  state.currentNode = nodeKey;
  sceneBackdrop.dataset.scene = node.backdrop;
  speakerName.textContent = node.speaker === 'Personaje' ? getCharacterProfile().name : node.speaker;
  currentStatus.textContent = node.status;
  chapterTag.textContent = state.chapter;
  dialogueText.textContent = typeof node.text === 'function' ? node.text() : node.text;

  const activeIndex = ['intro', 'platform', 'letter', 'truth', 'end'].includes(nodeKey) ? 0 : 1;
  updateVignettes(activeIndex);

  choiceList.innerHTML = '';

  if (nodeKey === 'end') {
    const ending = resolveEnding();
    dialogueText.textContent = `${ending} El peso de la historia final fue ${state.trust + state.courage + state.memory}, y tú elegiste ser ${getCharacterProfile().name}.`;

    const restartBtn = document.createElement('button');
    restartBtn.className = 'choice-btn';
    restartBtn.textContent = 'Reiniciar historia';
    restartBtn.addEventListener('click', () => {
      resetGame();
    });
    choiceList.appendChild(restartBtn);
    return;
  }

  node.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.textContent = choice.label;
    button.addEventListener('click', () => {
      Object.entries(choice.effects).forEach(([key, value]) => {
        state[key] = (state[key] ?? 0) + value;
      });
      updateStats();
      renderNode(choice.next);
    });
    choiceList.appendChild(button);
  });
}

function resetGame() {
  state.trust = 0;
  state.courage = 0;
  state.memory = 0;
  state.currentNode = 'intro';
  state.randomLocation = randomScenes[Math.floor(Math.random() * randomScenes.length)];
  state.randomAtmosphere = randomAtmospheres[Math.floor(Math.random() * randomAtmospheres.length)];
  updateStats();
  renderNode('intro');
}

function startGame() {
  titleScreen.classList.add('hidden');
  gameShell.classList.remove('hidden');
  resetGame();
}

startGameBtn.addEventListener('click', startGame);
shuffleBtn.addEventListener('click', () => {
  state.randomLocation = randomScenes[Math.floor(Math.random() * randomScenes.length)];
  state.randomAtmosphere = randomAtmospheres[Math.floor(Math.random() * randomAtmospheres.length)];
  resetGame();
});

renderCharacterSelection();
updateStats();
renderNode('intro');
