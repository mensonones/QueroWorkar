import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

export const Details = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Detail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

export const DetailExtra = styled.Text`
  margin-left: 6px;
`;

export const Favoritar = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

export const FavoritarText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
  margin-left: 5px;
`;
