import { ApiConfig } from '../../config/api';
import { httpClient } from '../../infra/http';
import { WeatherResult } from '../model';

export const getWeather = async (
  lat: number,
  lon: number,
): Promise<WeatherResult> => {
  const url = ApiConfig.GET_WEATHER(lat, lon);
  const result = await httpClient.get<WeatherResult>(url);

  return result.data;
};
