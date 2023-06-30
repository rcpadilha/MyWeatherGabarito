import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ContainerProps } from './interface';

export const Container = styled(View)<ContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor ?? '#FFFFFF'};
`;

export const Message = styled(Text)`
  padding: 24px;
`;

export const Temperature = styled(Text)`
  font-size: 96px;
  font-weight: bold;
  text-align: center;
  margin: 0;
  padding: 0;
`;

export const City = styled(Text)`
  text-align: center;
  font-size: 36px;
`;

export const FeelsLike = styled(Text)`
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
`;

export const Description = styled(Text)`
  text-align: center;
  margin-top: 8px;
`;

export const DetailsContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  margin-top: 36px;
`;

export const DetailItem = styled(View)`
  flex: 1;
  align-items: center;
`;

export const DetailLabel = styled(Text)`
  font-weight: bold;
`;

export const DetailValue = styled(Text)`
  font-size: 16px;
`;
