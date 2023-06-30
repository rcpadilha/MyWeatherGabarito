import { useEffect, useState } from 'react';
import { UseWeatherResult } from './interface';
import { WeatherResult } from '../../../../data/model';
import { weatherService } from '../../../../data/service';

const useWeather = (lat: number, lon: number): UseWeatherResult => {
  const [weather, setWeather] = useState<WeatherResult>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const result = await weatherService.getWeather(lat, lon);
        setWeather(result);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchWeather();
  }, []);

  return {
    weather,
    loading,
  };
};

export default useWeather;
