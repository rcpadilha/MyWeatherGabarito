import { useEffect, useState } from 'react';
import { UseLocationResult } from './interface';
import Geolocation from '@react-native-community/geolocation';

const useLocation = (): UseLocationResult => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    Geolocation.getCurrentPosition(
      response => {
        setLat(response.coords.latitude);
        setLon(response.coords.longitude);
        setLoading(false);
        setError(false);
      },
      error => {
        console.log(`Não foi possivel obter a localização: ${error.message}`);
        setLoading(false);
        setError(true);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
      },
    );
  }, []);

  return {
    lat,
    lon,
    loading,
    error,
  };
};

export default useLocation;
