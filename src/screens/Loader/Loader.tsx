import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { LoadingView } from '../../components/loading';
import { AppNavigatorProps } from '../../navigation/app';
import { Message, Wrapper } from './Styles';
import { useLocation } from './hooks/useLocation';

const Loader = () => {
  const navigation = useNavigation<AppNavigatorProps>();
  const { lat, lon, loading, error } = useLocation();

  useEffect(() => {
    if (!loading) {
      navigation.replace('Home', { lat, lon });
    }
  }, [loading]);

  if (error) {
    return (
      <Wrapper>
        <Message>Não foi possível obter a sua localização</Message>
      </Wrapper>
    );
  }

  return <LoadingView />;
};

export default Loader;
