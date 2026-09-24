const locations = {
  plaza: {
    name: 'Plaza del reloj',
    subtitle: 'El corazón de la ciudad.',
    description: 'La plaza está llena de luz tibia y gente que habla en voz baja mientras el reloj marca la hora de partir.',
    mood: 'Vibrante',
    action: 'Explorar',
    accent: '#f6d77a',
    people: [
      {
        id: 'aria',
        name: 'Aria',
        role: 'Guardiana del reloj',
        avatar: 'A',
        summary: 'Aria conoce cada hora exacta en la que la ciudad cambia de ánimo.',
        ask: 'Si le preguntas por el reloj, te mostrará la ruta que ella sigue cada noche.',
        route: ['Cruzas la plaza', 'Sigues el sonido del reloj', 'Llegas al puente de los susurros'],
        questions: [
          {
            prompt: '¿Por qué vigila el reloj?',
            result: 'Aria te confía que el reloj marca momentos en los que la ciudad puede cambiar de historia.',
            effects: { trust: 2, instinct: 1 }
          },
          {
            prompt: '¿Qué pasa si se adelanta la hora?',
            result: 'Te revela que hay rutas ocultas que solo aparecen cuando la ciudad quiere ser encontrada.',
            effects: { courage: 1, bond: 2 }
          }
        ]
      },
      {
        id: 'niko',
        name: 'Niko',
        role: 'Mensajero',
        avatar: 'N',
        summary: 'Niko siempre lleva cartas y rumores bajo la manga.',
        ask: 'Si le preguntas, te puede contar la ruta más rápida hacia el mercado y el puerto.',
        route: ['Sales de la plaza', 'Cruzas la avenida del humo', 'Te diriges al mercado oculto'],
        questions: [
          {
            prompt: '¿Quién te manda por la ciudad?',
            result: 'Niko te explica que cada mensaje guarda una verdad que tarda en llegar al destinatario.',
            effects: { trust: 1, instinct: 2 }
          },
          {
            prompt: '¿Cuál es la ruta más segura?',
            result: 'Te señala el mercado oculto como primera parada y te enseña la forma de leer señales secretas.',
            effects: { courage: 2, bond: 1 }
          }
        ]
      },
      {
        id: 'sofia',
        name: 'Sofia',
        role: 'Vendedora de velas',
        avatar: 'S',
        summary: 'Sofia guarda las historias de la gente que se queda hasta tarde.',
        ask: 'Si la escuchas, te hablará del sendero secreto que lleva al bosque cristal.',
        route: ['Sigues su olor a cera', 'Pasas por el callejón dorado', 'Entras al bosque de cristal'],
        questions: [
          {
            prompt: '¿Qué guardan las velas?',
            result: 'Sofia te dice que la luz no solo ilumina: también recuerda a quien la usa.',
            effects: { trust: 2, instinct: 1 }
          },
          {
            prompt: '¿Cuál es tu futuro aquí?',
            result: 'Te ofrece una visión del sendero oscuro que lleva al bosque de cristal.',
            effects: { courage: 1, bond: 2 }
          }
        ]
      }
    ]
  },
  biblioteca: {
    name: 'Biblioteca de humo',
    subtitle: 'Un lugar de historias y secretos.',
    description: 'Los estantes se inclinan como si quisieran contar algo. Hay un mapa arrugado y una llave antigua sobre la mesa más alta.',
    mood: 'Misterioso',
    action: 'Investigar',
    accent: '#9ad5ff',
    people: [
      {
        id: 'lena',
        name: 'Lena',
        role: 'Cronista',
        avatar: 'L',
        summary: 'Lena guarda las historias inéditas de la ciudad.',
        ask: 'Si le preguntas, te revela una ruta personal hacia el castillo del viento.',
        route: ['Subes por la escalera de vidrio', 'Cruzas la galería del viento', 'Llegas a la torre del castillo'],
        questions: [
          {
            prompt: '¿Qué historia no está escrita?',
            result: 'Lena te revela que la ciudad guarda un relato que aún no terminó de narrarse.',
            effects: { instinct: 2, bond: 1 }
          },
          {
            prompt: '¿Qué me aconsejas?',
            result: 'Te empuja a seguir el paso del viento, aunque parezca peligroso.',
            effects: { courage: 2, trust: 1 }
          }
        ]
      },
      {
        id: 'milo',
        name: 'Milo',
        role: 'Bibliotecario',
        avatar: 'M',
        summary: 'Milo conoce cada libro que fue escondido bajo la ciudad.',
        ask: 'Si le hablas del mapa, te mostrará el camino exacto hasta el puerto.',
        route: ['Bajas al sótano', 'Sigues la línea de luz azul', 'Encuentras el acceso al puerto'],
        questions: [
          {
            prompt: '¿Qué escondes debajo de los libros?',
            result: 'Milo te habla de una cámara secreta relacionada con los primeros viajes de la ciudad.',
            effects: { instinct: 2, trust: 1 }
          },
          {
            prompt: '¿Por qué la biblioteca tiene humo?',
            result: 'Te explica que el humo es una señal de recuerdos que aún no han sido archivados.',
            effects: { courage: 1, bond: 2 }
          }
        ]
      }
    ]
  },
  puerto: {
    name: 'Puerto de la luna',
    subtitle: 'Un borde donde termina la tierra.',
    description: 'Las barcas se balancean bajo la luz de la noche. El agua refleja la ciudad en trozos pequeños y brillantes.',
    mood: 'Sereno',
    action: 'Navegar',
    accent: '#8be4d8',
    people: [
      {
        id: 'sera',
        name: 'Sera',
        role: 'Capitana',
        avatar: 'S',
        summary: 'Sera lleva una brújula que apunta hacia los destinos que aún no has visto.',
        ask: 'Si le preguntas por la ruta, te habla del sendero del bosque y del faro perdido.',
        route: ['Cruzas el muelle', 'Sigues la luz del faro', 'Navegas hacia el bosque de cristal'],
        questions: [
          {
            prompt: '¿Dónde apunta tu brújula?',
            result: 'Sera te dice que apunta hacia lo que aún no te atreves a reconocer.',
            effects: { instinct: 2, courage: 1 }
          },
          {
            prompt: '¿Qué te hace seguir navegando?',
            result: 'Te responde que el destino es siempre una decisión, no un lugar fijo.',
            effects: { trust: 1, bond: 2 }
          }
        ]
      },
      {
        id: 'orin',
        name: 'Orin',
        role: 'Pescador de sueños',
        avatar: 'O',
        summary: 'Orin escucha a la marea y sabe cuándo una historia va a cambiar de rumbo.',
        ask: 'Si le preguntas, te guía por una ruta que te lleva de vuelta a la plaza.',
        route: ['Regresas al embarcadero', 'Cruzas la avenida del agua', 'Llegas a la plaza del reloj'],
        questions: [
          {
            prompt: '¿Qué escuchas bajo el agua?',
            result: 'Orin te hace escuchar el murmullo de recuerdos que aún no han sido escogidos.',
            effects: { instinct: 2, trust: 1 }
          },
          {
            prompt: '¿Te arrepientes de partir?',
            result: 'Te confiesa que volver siempre es una decisión, no una derrota.',
            effects: { courage: 2, bond: 1 }
          }
        ]
      }
    ]
  },
  bosque: {
    name: 'Bosque de cristal',
    subtitle: 'Entre raíces y murmullos.',
    description: 'Los árboles parecen guardar recuerdos. Cada paso deja huellas de luz y un olor a tierra mojada y flores silvestres.',
    mood: 'Enigmático',
    action: 'Seguir',
    accent: '#8be58b',
    people: [
      {
        id: 'talia',
        name: 'Talia',
        role: 'Guardián del follaje',
        avatar: 'T',
        summary: 'Talia conoce cada sendero y cada secreto que la naturaleza no quiere devolver.',
        ask: 'Si le preguntas, te acompaña por la ruta del mercado y la salida del bosque.',
        route: ['Sigues la luz entre los árboles', 'Cruzas el puente de hojas', 'Llegas al mercado oculto'],
        questions: [
          {
            prompt: '¿Qué te hace quedarte aquí?',
            result: 'Talia te explica que el bosque solo guarda a quien está listo para escuchar.',
            effects: { trust: 1, instinct: 2 }
          },
          {
            prompt: '¿Puedes guiarme fuera?',
            result: 'Te muestra el camino más claro incluso cuando el sendero parece confundirte.',
            effects: { courage: 2, bond: 1 }
          }
        ]
      },
      {
        id: 'evan',
        name: 'Evan',
        role: 'Ermitaño',
        avatar: 'E',
        summary: 'Evan vive entre raíces y puede decirte qué historias realmente valen la pena.',
        ask: 'Si habla contigo, te invita a seguir la ruta hacia la biblioteca.',
        route: ['Te guía por el sendero de musgo', 'Pasan por la puerta de piedra', 'Llegas a la biblioteca de humo'],
        questions: [
          {
            prompt: '¿Qué es lo que más te cuesta olvidar?',
            result: 'Evan te dice que cada persona lleva un recuerdo que solo se vuelve valioso cuando se comparte.',
            effects: { trust: 2, bond: 1 }
          },
          {
            prompt: '¿Qué camino me recomiendas?',
            result: 'Te lleva a la biblioteca con una recomendación que parece más una promesa que una ruta.',
            effects: { instinct: 1, courage: 2 }
          }
        ]
      }
    ]
  },
  mercado: {
    name: 'Mercado oculto',
    subtitle: 'La ciudad habla en voces pequeñas.',
    description: 'Hay puestos de velas, música, cartas, y un vendedor que te ofrece un mapa con una leyenda que aún no entiendes.',
    mood: 'Animado',
    action: 'Comprar',
    accent: '#ffb3c8',
    people: [
      {
        id: 'cira',
        name: 'Cira',
        role: 'Vendedora de cartas',
        avatar: 'C',
        summary: 'Cira mezcla suerte, comercio y un poco de magia para cada compra.',
        ask: 'Si te detienes a hablar con ella, te enseña la ruta hacia el puerto.',
        route: ['Sales del mercado', 'Bajas hacia la calle de las olas', 'Llegas al puerto de la luna'],
        questions: [
          {
            prompt: '¿Qué carta te ha llegado hoy?',
            result: 'Cira te entrega una nota sin sello que parece hablarte directamente de la próxima ciudad.',
            effects: { instinct: 2, trust: 1 }
          },
          {
            prompt: '¿Cuál es la mejor compra?',
            result: 'Te enseña que la mejor compra no es un objeto, sino una decisión que cambia tu rumbo.',
            effects: { courage: 2, bond: 1 }
          }
        ]
      },
      {
        id: 'juno',
        name: 'Juno',
        role: 'Tuercas y recuerdos',
        avatar: 'J',
        summary: 'Juno no vende objetos: vende historias atrapadas en pequeños detalles.',
        ask: 'Te ofrece un camino directo hacia la biblioteca antes de que salga la luna.',
        route: ['Cruzas la canasta de espejos', 'Sigues los faroles rojos', 'Llegas a la biblioteca de humo'],
        questions: [
          {
            prompt: '¿Qué guardan esos objetos?',
            result: 'Juno te explica que cada objeto conserva el peso de la persona que lo usó antes.',
            effects: { instinct: 2, bond: 1 }
          },
          {
            prompt: '¿Cuál es el secreto del mercado?',
            result: 'Te revela que el mercado solo aparece para quienes están listos para elegir un camino.',
            effects: { trust: 1, courage: 2 }
          }
        ]
      }
    ]
  },
  castillo: {
    name: 'Castillo del viento',
    subtitle: 'A la orilla del horizonte.',
    description: 'Las torres se alzan sobre la noche como espectros de piedra. Desde arriba, la ciudad entera parece un libro abierto.',
    mood: 'Majestuoso',
    action: 'Ascender',
    accent: '#d5c0ff',
    people: [
      {
        id: 'elian',
        name: 'Elian',
        role: 'Observador de la torre',
        avatar: 'E',
        summary: 'Elian ve la ciudad desde arriba y sabe qué caminos se abren a cada decisión.',
        ask: 'Si le preguntas, te muestra la ruta más peligrosa pero más bella de la ciudad.',
        route: ['Subes la torre noreste', 'Pasas por la ventana de vidrio', 'Bajas al bosque de cristal'],
        questions: [
          {
            prompt: '¿Qué ves desde arriba?',
            result: 'Elian te muestra que cada camino tiene un destino y un coste distinto.',
            effects: { instinct: 2, courage: 1 }
          },
          {
            prompt: '¿Cuál es mi camino real?',
            result: 'Te señala el bosque como el siguiente lugar donde todo empieza a decidirse.',
            effects: { trust: 1, bond: 2 }
          }
        ]
      },
      {
        id: 'mara',
        name: 'Mara',
        role: 'Guardiana de la puerta',
        avatar: 'M',
        summary: 'Mara no deja entrar a cualquiera, pero sí escucha a quien viene con una pregunta honesta.',
        ask: 'Si le hablas con calma, te guía hacia la plaza del reloj.',
        route: ['Sales por la puerta del este', 'Cruzas el jardín de piedra', 'Vuelves a la plaza del reloj'],
        questions: [
          {
            prompt: '¿Qué me estás dejando entrar?',
            result: 'Mara reconoce en ti un viajero que ya no puede seguir ignorando la historia de la ciudad.',
            effects: { trust: 2, bond: 1 }
          },
          {
            prompt: '¿Volveré a encontrar la plaza?',
            result: 'Te asegura que la plaza siempre espera a quienes saben escuchar su reloj.',
            effects: { courage: 1, instinct: 2 }
          }
        ]
      }
    ]
  }
};

const characterProfiles = {
  aria: {
    arc: 'Aria protege la hora exacta en la que la ciudad decide cambiar de rumbo.',
    secret: 'Siente que el reloj no marca tiempo, sino destinos.',
    focus: 'La verdad oculta entre los segundos',
    unlock: { stat: 'trust', value: 2, label: 'confianza', hint: 'Aria te abre la puerta solo si le hablas con sinceridad.' }
  },
  niko: {
    arc: 'Niko entrega mensajes que no siempre fueron escritos para ti.',
    secret: 'Cada carta que lleva cuenta una verdad que alguien intentó ocultar.',
    focus: 'La ruta más rápida nunca es la más honesta',
    unlock: { stat: 'instinct', value: 2, label: 'instinto', hint: 'Niko solo confía en quien lee entre líneas.' }
  },
  sofia: {
    arc: 'Sofia recuerda los nombres de quienes se quedan demasiado tarde.',
    secret: 'Las velas que vende no iluminan: guardan promesas.',
    focus: 'Los destinos se sienten antes de verse',
    unlock: { stat: 'bond', value: 2, label: 'vínculo', hint: 'Sofia te guía cuando descubres que la luz también une.' }
  },
  lena: {
    arc: 'Lena escribe la historia que la ciudad aún no quiere admitir.',
    secret: 'La biblioteca guarda un relato que aún no fue terminado por nadie.',
    focus: 'La verdad vive en los espacios vacíos',
    unlock: { stat: 'instinct', value: 2, label: 'instinto', hint: 'La historia solo se revela con atención absoluta.' }
  },
  milo: {
    arc: 'Milo cuida los libros que nadie debería haber podido abrir.',
    secret: 'Debajo del humo hay recuerdos que la ciudad intenta borrar.',
    focus: 'La memoria siempre vuelve a la superficie',
    unlock: { stat: 'courage', value: 1, label: 'valor', hint: 'Milo admite la verdad a quienes se atreven a mirar el sótano.' }
  },
  sera: {
    arc: 'Sera no busca un puerto fijo, sino una versión distinta de ti.',
    secret: 'Su brújula señala deseos, no lugares.',
    focus: 'El viaje cambia al viajero',
    unlock: { stat: 'courage', value: 1, label: 'valor', hint: 'La navegación exige decidir sin saber dónde termina la noche.' }
  },
  orin: {
    arc: 'Orin escucha los recuerdos del agua antes de que se conviertan en destino.',
    secret: 'Volver siempre es una elección, no una derrota.',
    focus: 'Las decisiones vuelven a ti como mareas',
    unlock: { stat: 'bond', value: 1, label: 'vínculo', hint: 'Orin solo te devuelve al origen si te quedas lo suficiente para escuchar.' }
  },
  talia: {
    arc: 'Talia guía a los que tienen la valentía de escuchar el bosque.',
    secret: 'Cada raíz lleva una memoria humana escondida en la tierra.',
    focus: 'La verdad crece lentamente',
    unlock: { stat: 'trust', value: 1, label: 'confianza', hint: 'Talia no te deja ir lejos si aún no escuchas la tierra.' }
  },
  evan: {
    arc: 'Evan enseña que el camino correcto se reconoce por la forma en que cambia a quien lo toma.',
    secret: 'Olvidar es también una forma de elegir.',
    focus: 'Las historias más sanas no son las más fáciles',
    unlock: { stat: 'bond', value: 1, label: 'vínculo', hint: 'Evan te acompaña solo cuando compartes lo que más te pesa.' }
  },
  cira: {
    arc: 'Cira cambia el destino de quien compra la carta correcta.',
    secret: 'Algunas cartas no llegan por azar, sino por una promesa incumplida.',
    focus: 'Todo destino tiene un precio',
    unlock: { stat: 'instinct', value: 2, label: 'instinto', hint: 'Cira sabe que solo quien lee la intención consigue la verdad.' }
  },
  juno: {
    arc: 'Juno convierte pequeños objetos en pruebas de quién eres realmente.',
    secret: 'El mercado no ofrece objetos: ofrece decisiones que vuelven a ti.',
    focus: 'Cada elección tiene forma física',
    unlock: { stat: 'courage', value: 2, label: 'valor', hint: 'Juno no vende certezas; solo exige que te decidas.' }
  },
  elian: {
    arc: 'Elian observa la ciudad como si fuera un mapa de personas que aún no saben elegirse.',
    secret: 'Desde arriba, cada camino se ve con un coste distinto.',
    focus: 'La visión exige sacrificio',
    unlock: { stat: 'trust', value: 1, label: 'confianza', hint: 'Elian te enseña a mirar solo cuando le permites ver de verdad.' }
  },
  mara: {
    arc: 'Mara guarda la puerta de la ciudad y el momento en que alguien decide volver a ser humano.',
    secret: 'La puerta no cierra la salida: prueba si tú quieres seguir adelante.',
    focus: 'La verdadera salida siempre exige volver a empezar',
    unlock: { stat: 'bond', value: 1, label: 'vínculo', hint: 'Mara te deja entrar solo si te permites ser reconocido.' }
  }
};

const state = {
  selectedLocation: 'plaza',
  visited: new Set(['plaza']),
  activeRoute: null,
  selectedPerson: null,
  player: {
    trust: 0,
    courage: 0,
    instinct: 0,
    bond: 0
  },
  characterProgress: {},
  journal: [],
  lastStoryChoice: null
};

const locationTitle = document.getElementById('locationTitle');
const locationSubtitle = document.getElementById('locationSubtitle');
const detailName = document.getElementById('detailName');
const detailText = document.getElementById('detailText');
const detailMood = document.getElementById('detailMood');
const detailAction = document.getElementById('detailAction');
const peopleList = document.getElementById('peopleList');
const activeRouteTitle = document.getElementById('activeRouteTitle');
const activeRouteText = document.getElementById('activeRouteText');
const storyChoices = document.getElementById('storyChoices');
const visitedList = document.getElementById('visitedList');
const navHint = document.getElementById('navHint');
const journalList = document.getElementById('journalList');
const travelBtn = document.getElementById('travelBtn');
const resetMapBtn = document.getElementById('resetMapBtn');
const backBtn = document.getElementById('backBtn');
const hotspotEls = document.querySelectorAll('.hotspot');
const personModal = document.getElementById('personModal');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalRouteList = document.getElementById('modalRouteList');
const modalChoiceList = document.getElementById('modalChoiceList');
const closeModalBtn = document.getElementById('closeModalBtn');
const followRouteBtn = document.getElementById('followRouteBtn');
const modalProfile = document.getElementById('modalProfile');
const statEls = {
  trust: document.getElementById('statTrust'),
  courage: document.getElementById('statCourage'),
  instinct: document.getElementById('statInstinct'),
  bond: document.getElementById('statBond')
};

function getCharacterProgress(personId) {
  if (!state.characterProgress[personId]) {
    state.characterProgress[personId] = { conversations: 0, trust: 0, courage: 0, instinct: 0, bond: 0 };
  }
  return state.characterProgress[personId];
}

function recordJournalEntry(entry) {
  state.journal = [entry, ...state.journal].slice(0, 6);
  renderJournal();
}

function renderJournal() {
  journalList.innerHTML = '';

  if (!state.journal.length) {
    const li = document.createElement('li');
    li.textContent = 'Aún no has oído ninguna verdad del mapa.';
    journalList.appendChild(li);
    return;
  }

  state.journal.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = entry;
    journalList.appendChild(li);
  });
}

function updateTravelerStats() {
  Object.entries(statEls).forEach(([key, el]) => {
    el.textContent = state.player[key] ?? 0;
  });
}

function renderVisitedList() {
  const items = [...state.visited];
  visitedList.innerHTML = '';

  if (!items.length) {
    const li = document.createElement('li');
    li.textContent = 'Sin rutas aún';
    visitedList.appendChild(li);
    return;
  }

  items.forEach((id) => {
    const li = document.createElement('li');
    li.textContent = locations[id].name;
    visitedList.appendChild(li);
  });
}

function updateNavHint() {
  const locationName = locations[state.selectedLocation].name;
  if (state.activeRoute) {
    navHint.textContent = `Estás en ${locationName}. Ruta activa: ${state.activeRoute.person} → ${state.activeRoute.location}.`;
    return;
  }

  navHint.textContent = `Estás en ${locationName}. Elige un personaje o cambia de destino para seguir navegando.`;
}

function renderPeopleList() {
  const currentPeople = locations[state.selectedLocation].people || [];
  peopleList.innerHTML = '';

  currentPeople.forEach((person) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'person-card';
    button.innerHTML = `
      <span class="person-card__avatar">${person.avatar}</span>
      <div>
        <strong>${person.name}</strong>
        <small>${person.role}</small>
      </div>
    `;
    button.addEventListener('click', () => openPersonModal(person.id));
    peopleList.appendChild(button);
  });
}

function renderCharacterProfile(person) {
  const profile = characterProfiles[person.id] || {};
  const progress = getCharacterProgress(person.id);
  const unlock = profile.unlock ? {
    ...profile.unlock,
    current: state.player[profile.unlock.stat] ?? 0,
    ready: (state.player[profile.unlock.stat] ?? 0) >= profile.unlock.value
  } : null;

  modalProfile.innerHTML = `
    <strong>${profile.arc || 'Arco personal aún por descubrir.'}</strong>
    <p>${profile.secret || 'Este personaje guarda más de lo que deja ver.'}</p>
    <p><strong>Enfoque:</strong> ${profile.focus || 'Sin patrón aún definido.'}</p>
    <p><strong>Desarrollo:</strong> ${progress.conversations} conversaciones · vínculos ${progress.bond}</p>
    <span class="profile-badge ${unlock && unlock.ready ? 'ready' : 'locked'}">
      ${unlock ? (unlock.ready ? 'Ruta desbloqueada' : `Falta ${unlock.value - unlock.current} de ${unlock.label}`) : 'Relación abierta'}
    </span>
  `;
}

function getStoryOptions(personId) {
  const options = {
    aria: [
      { id: 'seguir', title: 'Seguir el reloj sin preguntas', description: 'Dejas que el destino te lleve con calma.', effects: { trust: 1, instinct: 1 } },
      { id: 'interrogar', title: 'Exigir la verdad del reloj', description: 'Afrontas el misterio con franqueza.', effects: { courage: 2, bond: 1 } },
      { id: 'escuchar', title: 'Escuchar el tic del reloj', description: 'Te quedas en silencio y entiendes lo que nadie más oye.', effects: { instinct: 2, trust: 1 } }
    ],
    niko: [
      { id: 'rapidez', title: 'Tomar la ruta más rápida', description: 'Vas directo al objetivo sin perder tiempo.', effects: { instinct: 1, courage: 1 } },
      { id: 'rumor', title: 'Detenerte a leer los mensajes', description: 'Descubres que el rumor oculta una verdad.', effects: { trust: 2, bond: 1 } },
      { id: 'seguridad', title: 'Pedir una ruta segura', description: 'Prefieres la protección de la verdad.', effects: { courage: 2, instinct: 1 } }
    ],
    sofia: [
      { id: 'encender', title: 'Encender más velas', description: 'Haces que la noche respire con claridad.', effects: { bond: 2, trust: 1 } },
      { id: 'dejar', title: 'Dejar la luz a medias', description: 'Cuestionas si la verdad siempre necesita ser mostrada.', effects: { instinct: 2, courage: 1 } },
      { id: 'recordar', title: 'Guardar la historia en la cera', description: 'Aprendes a recordar lo que te ha tocado vivir.', effects: { trust: 2, instinct: 1 } }
    ],
    default: [
      { id: 'avanzar', title: 'Avanzar con fe', description: 'Confías en el camino que te muestra la historia.', effects: { trust: 1, courage: 1 } },
      { id: 'observar', title: 'Observar antes de decidir', description: 'Te tomas un momento para leer cada detalle.', effects: { instinct: 2, bond: 1 } },
      { id: 'afrontar', title: 'Enfrentar la verdad', description: 'No evitas la parte más difícil del camino.', effects: { courage: 2, trust: 1 } }
    ]
  };

  return options[personId] || options.default;
}

function renderStoryChoices() {
  storyChoices.innerHTML = '';
  storyChoices.classList.remove('visible');

  if (!state.activeRoute) {
    return;
  }

  const options = getStoryOptions(state.activeRoute.personId);
  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'story-choice-btn';
    button.innerHTML = `<strong>${option.title}</strong><span>${option.description}</span>`;
    button.addEventListener('click', () => {
      Object.entries(option.effects).forEach(([key, value]) => {
        state.player[key] = (state.player[key] ?? 0) + value;
      });

      state.lastStoryChoice = option.title;
      recordJournalEntry(`${state.activeRoute.person}: eliges “${option.title}” y la historia cambia.`);
      updateTravelerStats();
      const result = document.createElement('div');
      result.className = 'choice-result';
      result.textContent = `${option.title}: ${option.description}`;

      const oldResults = storyChoices.querySelectorAll('.choice-result');
      oldResults.forEach((node) => node.remove());
      storyChoices.appendChild(result);
    });
    storyChoices.appendChild(button);
  });

  storyChoices.classList.add('visible');
}

function updateActiveRouteDisplay() {
  if (!state.activeRoute) {
    activeRouteTitle.textContent = 'Sin ruta elegida';
    activeRouteText.textContent = 'Elige a alguien del lugar para seguir su camino.';
    storyChoices.innerHTML = '';
    storyChoices.classList.remove('visible');
    return;
  }

  activeRouteTitle.textContent = `${state.activeRoute.person} · ${state.activeRoute.location}`;
  activeRouteText.textContent = state.activeRoute.route.join(' → ');
  renderStoryChoices();
}

function openPersonModal(personId) {
  const location = locations[state.selectedLocation];
  const person = (location.people || []).find((item) => item.id === personId);
  if (!person) return;

  document.body.classList.add('modal-open');
  state.selectedPerson = person.id;
  modalTitle.textContent = `${person.name} · ${person.role}`;
  modalSummary.textContent = `${person.summary} ${person.ask}`;
  modalRouteList.innerHTML = '';
  modalChoiceList.innerHTML = '';
  renderCharacterProfile(person);

  person.route.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    modalRouteList.appendChild(li);
  });

  person.questions.forEach((question) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-modal-btn';
    btn.textContent = question.prompt;
    btn.addEventListener('click', () => {
      const progress = getCharacterProgress(person.id);
      progress.conversations += 1;

      Object.entries(question.effects).forEach(([key, value]) => {
        state.player[key] = (state.player[key] ?? 0) + value;
        progress[key] = (progress[key] ?? 0) + value;
      });

      updateTravelerStats();
      renderCharacterProfile(person);
      recordJournalEntry(`${person.name}: ${question.result}`);

      const result = document.createElement('div');
      result.className = 'choice-result';
      result.textContent = question.result;

      const currentChoices = modalChoiceList.querySelectorAll('.choice-result');
      currentChoices.forEach((item) => item.remove());
      modalChoiceList.appendChild(result);
    });
    modalChoiceList.appendChild(btn);
  });

  personModal.classList.remove('hidden');
  personModal.setAttribute('aria-hidden', 'false');
}

function closePersonModal() {
  personModal.classList.add('hidden');
  personModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderMap() {
  const activeLocation = locations[state.selectedLocation];

  locationTitle.textContent = activeLocation.name;
  locationSubtitle.textContent = activeLocation.subtitle;
  detailName.textContent = activeLocation.name;
  detailText.textContent = activeLocation.description;
  detailMood.textContent = activeLocation.mood;
  detailAction.textContent = activeLocation.action;

  hotspotEls.forEach((button) => {
    const locationId = button.dataset.location;
    const isActive = locationId === state.selectedLocation;
    button.classList.toggle('active', isActive);
    button.classList.toggle('visited', state.visited.has(locationId));
  });

  const hasVisited = state.visited.has(state.selectedLocation);
  travelBtn.textContent = hasVisited ? 'Visitar otra vez' : 'Ir aquí';

  renderVisitedList();
  renderPeopleList();
  renderJournal();
  updateNavHint();
  updateActiveRouteDisplay();
  updateTravelerStats();
}

function selectLocation(locationId) {
  if (locationId !== state.selectedLocation) {
    state.activeRoute = null;
  }

  state.selectedLocation = locationId;
  renderMap();
}

hotspotEls.forEach((button) => {
  button.addEventListener('click', () => {
    selectLocation(button.dataset.location);
  });
});

travelBtn.addEventListener('click', () => {
  state.visited.add(state.selectedLocation);
  recordJournalEntry(`Llegas a ${locations[state.selectedLocation].name} y tomas nota de lo que ocurre aquí.`);
  renderMap();
});

backBtn.addEventListener('click', () => {
  state.selectedLocation = 'plaza';
  renderMap();
});

resetMapBtn.addEventListener('click', () => {
  state.selectedLocation = 'plaza';
  state.visited = new Set(['plaza']);
  state.activeRoute = null;
  state.lastStoryChoice = null;
  state.player = { trust: 0, courage: 0, instinct: 0, bond: 0 };
  state.characterProgress = {};
  state.journal = [];
  renderMap();
});

closeModalBtn.addEventListener('click', closePersonModal);
personModal.addEventListener('click', (event) => {
  if (event.target === personModal) closePersonModal();
});

followRouteBtn.addEventListener('click', () => {
  const location = locations[state.selectedLocation];
  const person = (location.people || []).find((item) => item.id === state.selectedPerson);

  if (!person) return;

  const profile = characterProfiles[person.id];
  const unlock = profile && profile.unlock;
  const requirement = unlock ? (state.player[unlock.stat] ?? 0) : 0;

  if (unlock && requirement < unlock.value) {
    const warning = document.createElement('div');
    warning.className = 'choice-result';
    warning.style.borderColor = 'rgba(246, 215, 122, 0.35)';
    warning.textContent = `${person.name} te mira con desconfianza: ${unlock.hint}`;

    const currentChoices = modalChoiceList.querySelectorAll('.choice-result');
    currentChoices.forEach((item) => item.remove());
    modalChoiceList.appendChild(warning);
    return;
  }

  state.activeRoute = {
    person: person.name,
    personId: person.id,
    location: location.name,
    route: person.route
  };

  recordJournalEntry(`${person.name} te guía por su ruta personal: ${person.route[0]} → ${person.route[person.route.length - 1]}.`);
  updateActiveRouteDisplay();
  closePersonModal();
});

renderJournal();
renderMap();
