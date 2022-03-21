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
    ]
  },
  'humans/shouting': {
    description: 'Personas gritando',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Shout', 'Screaming', 'Yell']
  },
  'humans/crowd': {
    description: 'Grupos de personas hablando simultaneamente',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Chatter', 'Crowd']
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
    ]
  },
  'Music/music': {
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
    ]
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
    ]
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
    ]
  },
  'environmental/rain': {
    description: 'Lluvia de diversa intensidad',
    ESC: ['rain'],
    UrbanSound: [''],
    AudioSet: ['Rain', 'Rain on surface']
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
    ]
  },
  'environmental/water': {
    description: 'Flujo de agua o cuerpos de agua',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Waterfall', 'Water', 'Stream', 'Splash, splatter', 'Slosh']
  },
  'environmental/others': {
    description: 'Otros sonidos naturales',
    ESC: ['crackling_fire', 'sea_waves', 'thunderstorm'],
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
    ]
  },
  'mechanical/impact': {
    description:
      'Taladros, martillos neumáticos y otros sonidos de impacto sobre material',
    ESC: [''],
    UrbanSound: ['jackhammer'],
    AudioSet: ['Jackhammer', 'Hammer']
  },
  'mechanical/cutting': {
    description: 'Motosierras y otros sonidos de corte',
    ESC: ['chainsaw', 'hand_saw'],
    UrbanSound: [''],
    AudioSet: ['Chainsaw', 'Sawing', 'Chop', 'Splinter']
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
    ]
  },
  'mechanical/digging': {
    description: 'Retroexcabadoras y otros sonidos relacionados a excabación',
    ESC: [''],
    UrbanSound: ['drilling'],
    AudioSet: ['Drill']
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
    ]
  },
  'vehicles/motorcycles': {
    description: 'Motocicletas',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Motorcycle']
  },
  'vehicles/cars': {
    description: 'Autos o vehículos ligeros',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Car', 'Car passing by', 'Race car, auto racing']
  },
  'vehicles/bus': {
    description: 'Buses o camiones medianos y pesados',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Truck', 'Bus']
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
    ]
  },
  'vehicles/others': {
    description: 'Otros sonidos mecánicos dinámicos o móviles',
    ESC: ['train'],
    UrbanSound: [''],
    AudioSet: [
      'Boat, Water vehicle',
      'Rail transport',
      'Bicycle',
      'Skateboard',
      'Train',
      'Railroad car, train wagon',
      'Train wheels squealing',
      'Ship',
      'Motorboat, speedboat'
    ]
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
    ]
  },
  'alerts/alarms': {
    description: 'Alarmas de autos, casas, etc',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Alarm', 'Car alarm', 'Fire alarm']
  },
  'alerts/horns': {
    description: 'Bocinas de autos, camiónes, etc',
    ESC: ['car_horn'],
    UrbanSound: ['car_horn'],
    AudioSet: [
      'Vehicle horn, car horn, honking',
      'Air horn, truck horn',
      'Toot'
    ]
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
    ]
  },
  'alerts/braking and skidding': {
    description: 'Frenados o derrapes de vehículos',
    ESC: [''],
    UrbanSound: [''],
    AudioSet: ['Skidding', 'Tire squeal', 'Air breack']
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
    ]
  }
}

