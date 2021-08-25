const humanColor = "#ffd697"
const musicalColor = "#275bb2"
const animalColor = "#fcd612"
const environmentColor = "#b3d9e5"
const mechanicalColor = "#BADA55"
const carColor = "#218732"
const alertColor = "#b00b69"

export const humanOptions = [
  { value: 'habla', label: 'Habla', color: humanColor },
  { value: 'gritos', label: 'Gritos', color: humanColor },
  { value: 'multitudes', label: 'Multitudes', color: humanColor },
  { value: 'otros', label: 'Otros', color: humanColor },
];
export const musicalOptions = [
  { value: 'canto', label: 'Canto', color: musicalColor},
  { value: 'instrumental', label: 'Instrumental', color: musicalColor},
];
export const animalsOptions = [
  { value: 'perro', label: 'Perro', color: animalColor},
];
export const environmentOptions = [
  { value: 'lluvia', label: 'Lluvia', color: environmentColor},
];
export const mechanicalOptions = [
  { value: 'taladro', label: 'Taladro', color: mechanicalColor},
];
export const carOptions = [
  { value: 'motocicleta', label: 'Motocicleta', color: carColor},
];
export const alertOptions = [
  { value: 'sirena', label: 'Sirena', color: alertColor},
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
    label: 'Climáticos / M Ambiente',
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