const humanColor = '#ffa00e'
const musicalColor = '#275bb2'
const animalColor = '#e4bf03'
const environmentColor = '#409ebb'
const mechanicalColor = '#7c9921'
const carColor = '#218732'
const alertColor = '#b00b69'

export const humanOptions = [
  { value: 'habla', label: 'Habla', color: humanColor },
  { value: 'gritos', label: 'Gritos', color: humanColor },
  { value: 'multitudes', label: 'Multitudes', color: humanColor },
  { value: 'otros_humanos', label: 'Otros', color: humanColor }
]
export const musicalOptions = [
  { value: 'canto', label: 'Canto', color: musicalColor },
  { value: 'instrumental', label: 'Instrumental', color: musicalColor }
]
export const animalsOptions = [
  { value: 'perro', label: 'Perro', color: animalColor },
  { value: 'ave', label: 'Ave', color: animalColor },
  { value: 'otros_animales', label: 'Otros', color: animalColor }
]
export const environmentOptions = [
  { value: 'lluvia', label: 'Lluvia', color: environmentColor },
  { value: 'viento', label: 'Viento', color: environmentColor },
  { value: 'flujo_agua', label: 'Flujo de agua', color: environmentColor },
  {
    value: 'trueno_relampago',
    label: 'Trueno/Relámpago',
    color: environmentColor
  },
  { value: 'otros_ambientales', label: 'Otros', color: environmentColor }
]
export const mechanicalOptions = [
  {
    value: 'herramienta_impacto',
    label: 'Herramienta de impacto',
    color: mechanicalColor
  },
  {
    value: 'herramienta_corte',
    label: 'Herramienta de corte',
    color: mechanicalColor
  },
  {
    value: 'explosivo_disparo',
    label: 'Explosión/Disparo',
    color: mechanicalColor
  },
  { value: 'excavacion', label: 'Excavación', color: mechanicalColor },
  { value: 'otros_mecanicos', label: 'Otros', color: mechanicalColor }
]
export const carOptions = [
  { value: 'motocicleta', label: 'Motocicleta', color: carColor },
  { value: 'vehiculo_ligero', label: 'Vehículo ligero', color: carColor },
  { value: 'audio_mediano_pesado', label: 'Bus/Camión', color: carColor },
  { value: 'vehiculo_aereo', label: 'Helicoptero/Avión', color: carColor },
  { value: 'otros_vehiculos', label: 'Otros', color: carColor }
]
export const alertOptions = [
  { value: 'sirena', label: 'Sirena', color: alertColor },
  { value: 'alarma', label: 'Alarma', color: alertColor },
  { value: 'bocina', label: 'Bocina', color: alertColor },
  { value: 'campana', label: 'Campana', color: alertColor },
  { value: 'otras_alertas', label: 'Otros', color: alertColor }
]

export const taxonomyOptions = [
  {
    label: 'Humanos',
    options: humanOptions
  },
  {
    label: 'Musical',
    options: musicalOptions
  },
  {
    label: 'Animales',
    options: animalsOptions
  },
  {
    label: 'Climáticos / Medio Ambientales',
    options: environmentOptions
  },
  {
    label: 'Mecánicos',
    options: mechanicalOptions
  },
  {
    label: 'Vehículos',
    options: carOptions
  },
  {
    label: 'Alertas',
    options: alertOptions
  }
]

export const fusa_taxonomy = {
  'humans/talk': {
    description: 'Personas hablando o conversando',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: [
      'Speech',
      'Male speech, man speaking',
      'Female speech, woman speaking',
      'Child speech, kid speaking',
      'Conversation',
      'Narration, monologue'
    ],
    SPASS: ['talk'],
    Vitglobal: [''],
    Singapura: ['Talking']
  },
  'humans/shouting': {
    description: 'Personas gritando',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Shout', 'Screaming', 'Yell'],
    SPASS: ['shouting'],
    Vitglobal: [''],
    Singapura: ['Shouting']
  },
  'humans/crowd': {
    description: 'Grupos de personas hablando simultaneamente',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Chatter', 'Crowd'],
    SPASS: ['crowd'],
    Vitglobal: [''],
    Singapura: ['Large crowd']
  },
  'humans/others': {
    description: 'Otros sonidos producidos por humanos',
    ESC: [
      'crying_baby',
      'sneezing',
      'clapping',
      'breathing',
      'coughing',
      'footsteps',
      'laughing',
      'brushing_teeth',
      'snoring',
      'drinking_sipping'
    ],
    UrbanSound: ['children_playing'],
    AudioSet: [
      'Laughter',
      'Crying, sobbing',
      'Wail, moan',
      'Sigh',
      'Humming',
      'Groan',
      'Grunt',
      'Yawn',
      'Whistling',
      'Breathing',
      'Cough',
      'Sneeze',
      'Sniff',
      'Hubbub, speech noise, speech babble',
      'Clapping',
      'Cheering',
      'Applause',
      'Children playing',
      'Children shouting',
      'Babbling',
      'Baby laughter',
      'Baby cry, infant cry',
      'Snicker',
      'Walk, footsteps',
      'Belly laugh'
    ],
    SPASS: ['steps'],
    Vitglobal: [''],
    Singapura: [
      'Amplified speech',
      'Clapping',
      'Footsteps',
      'Human voice (other)',
      'Human movement (other)'
    ]
  },
  'music/music': {
    description:
      'Canto e instrumentos musicales acústicos o amplificados, bandas, conciertos, etc',
    ESC: [''],
    UrbanSound: ['street_music'],
    AudioSet: [
      'Music',
      'Singing',
      'Guitar',
      'Ukelele',
      'Piano',
      'Organ',
      'Synthesizer',
      'Drum',
      'Orchestra',
      'Trumpet',
      'String section',
      'Violin, fiddle',
      'Cello',
      'Flute',
      'Saxophone',
      'Clarinet',
      'Harp',
      'Choir',
      'Accordion',
      'Musical ensamble',
      'Bass',
      'Musical instrument'
    ],
    SPASS: ['music'],
    Vitglobal: ['MUSICA'],
    Singapura: [
      'Singing',
      'Stationary music',
      'Mobile music',
      'Ice cream truck',
      'Music (other)'
    ]
  },
  'animal/dog': {
    description: 'Ladridos de perro',
    ESC: ['dog'],
    UrbanSound: ['dog_bark'],
    AudioSet: [
      'Dog',
      'Bark',
      'Yip',
      'Howl',
      'Bow-wow',
      'Growling',
      'Whimper',
      'Bay'
    ],
    SPASS: ['dog'],
    Vitglobal: [''],
    Singapura: ['Dog barking']
  },
  'animal/bird': {
    description: 'Graznidos y cantos de aves',
    ESC: ['crow', 'hen', 'rooster', 'chirping_birds'],
    UrbanSound: [''],
    AudioSet: [
      'Bird',
      'Bird vocalization, bird call, bird song',
      'Pigeon, dove',
      'Crow',
      'Owl',
      'Gull, seagull',
      'Bird flight, flapping wings',
      'Chirp, tweet',
      'Fowl',
      'Caw'
    ],
    SPASS: ['bird'],
    Vitglobal: ['GAVIOTA'],
    Singapura: ['Bird chirping']
  },
  'animal/others': {
    description: 'Sonidos de otros animales e insectos',
    ESC: ['cat', 'sheep', 'crickets', 'insects', 'frog', 'pig', 'cow'],
    UrbanSound: [''],
    AudioSet: [
      'Meow',
      'Cat',
      'Cat communication',
      'Croak',
      'Cricket',
      'Mosquito',
      'Buzz',
      'Clip-clop',
      'Neigh, whinny',
      'Snort (horse)',
      'Moo',
      'Chicken, rooster',
      'Sheep',
      'Frog',
      'Insect',
      'Pig',
      'Animal',
      'Bee, wasp, etc.',
      'Fly, housefly',
      'Crowing, cock-a-doodle-doo',
      'Cattle, bovinae',
      'Livestock, farm animals, working animals',
      'Domestic animals, pets',
      'Oink',
      'Duck',
      'Cowbell',
      'Roar'
    ],
    SPASS: [''],
    Vitglobal: [''],
    Singapura: ['Insect chirping', 'Animal (other)']
  },
  'environmental/rain': {
    description: 'Lluvia de diversa intensidad',
    ESC: ['rain'],
    UrbanSound: [''],
    AudioSet: ['Rain', 'Rain on surface'],
    SPASS: ['rain'],
    Vitglobal: [''],
    Singapura: ['Rain']
  },
  'environmental/wind': {
    description: 'Viento soplando',
    ESC: ['wind'],
    UrbanSound: [''],
    AudioSet: [
      'Wind',
      'Wind noise (microphone)',
      'Rustling leaves',
      'Howl (wind)'
    ],
    SPASS: ['wind'],
    Vitglobal: [''],
    Singapura: ['Wind']
  },
  'environmental/water': {
    description: 'Flujo de agua o cuerpos de agua',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Waterfall', 'Water', 'Splash, splatter', 'Slosh'],
    SPASS: ['water'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'environmental/river': {
    description: 'Sonido de rio',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Stream'],
    SPASS: ['river'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'environmental/waves': {
    description: 'Sonido de olas de mar',
    ESC: ['sea_waves'],
    UrbanSound: [''],
    AudioSet: ['Waves, surf', 'Ocean'],
    SPASS: ['waves'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'environmental/others': {
    description: 'Otros sonidos naturales',
    ESC: ['crackling_fire', 'thunderstorm'],
    UrbanSound: [''],
    AudioSet: [
      'Ocean',
      'Thunderstorm',
      'Thunder',
      'Fire',
      'Crackle',
      'Wildfire',
      'Patter',
      'Environmental noise',
      'Waves, surf'
    ],
    SPASS: [''],
    Vitglobal: ['PAISAJE', 'PUERTO'],
    Singapura: ['Thunder', 'Hose pump', 'Water (other)', 'Weather (other)']
  },
  'mechanical/impact': {
    description:
      'Taladros, martillos neumáticos y otros sonidos de impacto sobre material',
    ESC: [''],
    UrbanSound: ['jackhammer'],
    AudioSet: ['Jackhammer', 'Hammer'],
    SPASS: ['impact'],
    Vitglobal: [
      'APILAR',
      'APILAR CHIRRIDO',
      'APILAR FRENOS',
      'APILAR LOCK',
      'APILAR MOTOR',
      'APILAR RETROCESO'
    ],
    Singapura: ['Jackhammer', 'Rock drill', 'Hoe ram', 'Pile driver']
  },
  'mechanical/cutting': {
    description: 'Motosierras y otros sonidos de corte',
    ESC: ['chainsaw', 'hand_saw'],
    UrbanSound: [''],
    AudioSet: ['Chainsaw', 'Sawing', 'Chop', 'Splinter'],
    SPASS: ['cutting'],
    Vitglobal: [''],
    Singapura: ['Chainsaw', 'Small/medium rotating saw', 'Large rotating saw']
  },
  'mechanical/explosives': {
    description: 'Sonidos de explosiones y disparos',
    ESC: ['fireworks'],
    UrbanSound: ['gun_shot'],
    AudioSet: [
      'Gunshot, gunfire',
      'Fireworks',
      'Firecracker',
      'Burst, pop',
      'Eruption',
      'Boom',
      'Machine gun',
      'Artillery fire',
      'Fusillade'
    ],
    SPASS: ['explosives', 'fireworks'],
    Vitglobal: ['CAÑONAZO'],
    Singapura: ['Explosion']
  },
  'mechanical/digging': {
    description: 'Retroexcavadoras y otros sonidos relacionados a excavación',
    ESC: [''],
    UrbanSound: ['drilling'],
    AudioSet: ['Drill'],
    SPASS: ['drilling'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'mechanical/air_conditioner': {
    description: 'Aire acondicionado',
    ESC: [''],
    UrbanSound: ['air_conditioner'],
    AudioSet: ['Air conditioning'],
    SPASS: ['air_conditioner'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'mechanical/others': {
    description: 'Otros sonidos mecánicos o de motores estáticos',
    ESC: ['engine'],
    UrbanSound: ['engine_idling'],
    AudioSet: [
      'Sanding',
      'Light engine (high frequency)',
      'Medium engine (mid frequency)',
      'Heavy engine (low frequency)',
      'Engine knocking',
      'Idling',
      'Engine starting',
      'Lawn mower'
    ],
    SPASS: [''],
    Vitglobal: ['MOTOR'],
    Singapura: [
      'Glass breaking',
      'Car crash',
      'Screeching',
      'Plastic crinkling',
      'Cleaning',
      'Gear',
      'Engine (other)',
      'Machinery impact (other)',
      'Non-machinery impact (other)',
      'Powered saw (other)',
      'Other'
    ]
  },
  'vehicles/motorcycles': {
    description: 'Motocicletas',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Motorcycle'],
    SPASS: ['motorcycle_idling', 'motorcycle_moving'],
    Vitglobal: ['MOTO'],
    Singapura: ['Small engine']
  },
  'vehicles/cars': {
    description: 'Autos o vehículos ligeros',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Car', 'Car passing by', 'Race car, auto racing'],
    SPASS: ['car_idling', 'car_moving'],
    Vitglobal: [''],
    Singapura: ['Medium engine']
  },
  'vehicles/bus': {
    description: 'Buses o camiones medianos y pesados',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Truck', 'Bus'],
    SPASS: ['bus_idling', 'bus_moving', 'truck_idling', 'truck_moving'],
    Vitglobal: ['CAMION'],
    Singapura: ['Large engine']
  },
  'vehicles/airborne': {
    description: 'Helicopteros, avionetas, aviones, etc',
    ESC: ['helicopter', 'airplane'],
    UrbanSound: [''],
    AudioSet: [
      'Aircraft',
      'Aircraft engine',
      'Helicopter',
      'Fixed-wing aircraft, airplane',
      'Jet engine',
      'Propeller, airscrew'
    ],
    SPASS: ['airborne'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'vehicles/water': {
    description: 'Lanchas, botes, etc',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: [
      'Boat, Water vehicle',
      'Motorboat, speedboat',
      'Ship',
      'Sailboat, sailing ship',
      'Rowboat, canoe, kayak'
    ],
    SPASS: ['Vwater'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'vehicles/others': {
    description: 'Otros sonidos mecánicos dinámicos o móviles',
    ESC: ['train'],
    UrbanSound: [''],
    AudioSet: [
      'Rail transport',
      'Bicycle',
      'Skateboard',
      'Train',
      'Railroad car, train wagon',
      'Train wheels squealing'
    ],
    SPASS: [''],
    Vitglobal: [''],
    Singapura: ['Electric train', 'Brake (other)', 'Train (other)']
  },
  'alerts/siren': {
    description: 'Sirenas de ambulancia, policía o bomberos',
    ESC: ['siren'],
    UrbanSound: ['siren'],
    AudioSet: [
      'Siren',
      'Police car (siren)',
      'Ambulance (siren)',
      'Fire engine, fire truck (siren)',
      'Civil defense siren'
    ],
    SPASS: ['siren'],
    Vitglobal: ['SIRENA'],
    Singapura: ['Siren']
  },
  'alerts/alarms': {
    description: 'Alarmas de autos, casas, etc',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Alarm', 'Car alarm', 'Fire alarm'],
    SPASS: ['alarm'],
    Vitglobal: ['ALARMA RETROCESO', 'ALARMA TONAL'],
    Singapura: ['Car alarm']
  },
  'alerts/horns': {
    description: 'Bocinas de autos, camiónes, etc',
    ESC: ['car_horn'],
    UrbanSound: ['car_horn'],
    AudioSet: [
      'Vehicle horn, car horn, honking',
      'Air horn, truck horn',
      'Toot'
    ],
    SPASS: ['horn'],
    Vitglobal: ['BOCINA'],
    Singapura: ['Car horn']
  },
  'alerts/bells': {
    description: 'Campanas de iglesias, etc',
    ESC: ['church_bells'],
    UrbanSound: [''],
    AudioSet: [
      'Bell',
      'Church bell',
      'Bicycle bell',
      'Change ringing (campanology)'
    ],
    SPASS: ['bells'],
    Vitglobal: [''],
    Singapura: ['']
  },
  'alerts/braking and skidding': {
    description: 'Frenados o derrapes de vehículos',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Skidding', 'Tire squeal', 'Air breack'],
    SPASS: ['braking'],
    Vitglobal: ['FRENOS'],
    Singapura: ['Friction brake', 'Exhaust brake']
  },
  'alerts/others': {
    description: 'Alertas de otros tipos',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: [
      'Emergency vehicle',
      'Reversing beeps',
      'Accelerating, revving, vroom',
      'Glass',
      'Shatter',
      'Honk'
    ],
    SPASS: [''],
    Vitglobal: ['CHIRRIDO', 'DESPICHE'],
    Singapura: ['Reverse beeper', 'Alert signal (other)']
  }
}
