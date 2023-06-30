import { StatusBar, Text, View } from 'react-native';
import { WeatherIcon } from '../../components/icon';
import { useWeather } from './hooks/useWeather';
import { useRoute } from '@react-navigation/native';
import { HomeRouteProp } from './interface';
import { LoadingView } from '../../components/loading';
import { useWeatherType } from './hooks/useWeatherType';
import {
  City,
  Container,
  Message,
  FeelsLike,
  Temperature,
  Description,
  DetailsContainer,
  DetailItem,
  DetailLabel,
  DetailValue,
} from './Styles';

const Home = () => {
  const {
    params: { lat, lon },
  } = useRoute<HomeRouteProp>();

  const { weather, loading } = useWeather(lat, lon);

  if (loading) {
    return <LoadingView />;
  }

  if (!weather) {
    return (
      <Container>
        <Message>
          Não foi possível obter informações do clima. Tente novamente mais
          tarde.
        </Message>
      </Container>
    );
  }

  const { color, type } = useWeatherType(weather.cod);

  return (
    <Container backgroundColor={color}>
      <StatusBar backgroundColor={color} />
      <View>
        <WeatherIcon type={type} />
        <Temperature>{weather.main.temp.toFixed().toString()}ºC</Temperature>
        <City>{weather.name}</City>
        <FeelsLike>
          Sensação térmica: {weather.main.feels_like.toFixed()}ºC
        </FeelsLike>
        <Description>{weather.weather.description}</Description>
        <DetailsContainer>
          <DetailItem>
            <DetailLabel>Vento</DetailLabel>
            <DetailValue>{weather.wind.speed}km/h</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Umidade</DetailLabel>
            <DetailValue>{weather.main.humidity}%</DetailValue>
          </DetailItem>
          <DetailItem>
            <DetailLabel>Nuvens</DetailLabel>
            <DetailValue>{weather.clouds.all}%</DetailValue>
          </DetailItem>
        </DetailsContainer>
      </View>
    </Container>
  );
};

export default Home;
