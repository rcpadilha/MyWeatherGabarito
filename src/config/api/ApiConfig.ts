export const WEATHER_API = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = 'eedaab2f6b15222fbb55cb333917d4a3';

export const GET_WEATHER = (lat: number, lon: number) =>
  `/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br`;
