const humanColor = "#ffa00e"
const musicalColor = "#275bb2"
const animalColor = "#e4bf03"
const environmentColor = "#409ebb"
const mechanicalColor = "#7c9921"
const carColor = "#218732"
const alertColor = "#b00b69"

export const humanOptions = [
  { value: 'habla', label: 'Habla', color: humanColor },
  { value: 'gritos', label: 'Gritos', color: humanColor },
  { value: 'multitudes', label: 'Multitudes', color: humanColor },
  { value: 'otros_humanos', label: 'Otros', color: humanColor },
];
export const musicalOptions = [
  { value: 'canto', label: 'Canto', color: musicalColor},
  { value: 'instrumental', label: 'Instrumental', color: musicalColor},
];
export const animalsOptions = [
  { value: 'perro', label: 'Perro', color: animalColor},
  { value: 'ave', label: 'Ave', color: animalColor},
  { value: 'otros_animales', label: 'Otros', color: animalColor},
];
export const environmentOptions = [
  { value: 'lluvia', label: 'Lluvia', color: environmentColor},
  { value: 'viento', label: 'Viento', color: environmentColor},
  { value: 'flujo_agua', label: 'Flujo de agua', color: environmentColor},
  { value: 'trueno_relampago', label: 'Trueno/Relámpago', color: environmentColor},
  { value: 'otros_ambientales', label: 'Otros', color: environmentColor},
];
export const mechanicalOptions = [
  { value: 'herramienta_impacto', label: 'Herramienta de impacto', color: mechanicalColor},
  { value: 'herramienta_corte', label: 'Herramienta de corte', color: mechanicalColor},
  { value: 'explosivo_disparo', label: 'Explosión/Disparo', color: mechanicalColor},
  { value: 'excavacion', label: 'Excavación', color: mechanicalColor},
  { value: 'otros_mecanicos', label: 'Otros', color: mechanicalColor},
];
export const carOptions = [
  { value: 'motocicleta', label: 'Motocicleta', color: carColor},
  { value: 'vehiculo_ligero', label: 'Vehículo ligero', color: carColor},
  { value: 'audio_mediano_pesado', label: 'Bus/Camión', color: carColor},
  { value: 'vehiculo_aereo', label: 'Helicoptero/Avión', color: carColor},
  { value: 'otros_vehiculos', label: 'Otros', color: carColor},
];
export const alertOptions = [
  { value: 'sirena', label: 'Sirena', color: alertColor},
  { value: 'alarma', label: 'Alarma', color: alertColor},
  { value: 'bocina', label: 'Bocina', color: alertColor},
  { value: 'campana', label: 'Campana', color: alertColor},
  { value: 'otras_alertas', label: 'Otros', color: alertColor},
];

export const taxonomyOptions = [
  {
    label: 'Humanos',
    options: humanOptions,
  },
  {
    label: 'Musical',
    options: musicalOptions,
  },
  {
    label: 'Animales',
    options: animalsOptions,
  },
  {
    label: 'Climáticos / Medio Ambientales',
    options: environmentOptions,
  },
  {
    label: 'Mecánicos',
    options: mechanicalOptions,
  },
  {
    label: 'Vehículos',
    options: carOptions,
  },
  {
    label: 'Alertas',
    options: alertOptions,
  },
];