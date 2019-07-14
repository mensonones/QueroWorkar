import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #e7eaf6;
  box-shadow: 1px 1px 1px #404354;
  margin-bottom: 15px;
  shadow-radius: 1;
  elevation: 1;
`;

export const TituloJob = styled.Text`
  align-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #38598b;
  text-align: center;
`;

export const Empresa = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #38598b;
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
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

export const TipoVaga = styled.Text`
  border: 2px solid #7fbf7f;
  border-radius: 5px;
  width: 110;
  text-align: center;
  background-color: #e7eaf6;
  margin-left: 6px;
  font-weight: bold;
  color: #7fbf7f;
`;

export const TipoEstagio = styled.Text`
  border: 2px solid #ffb732;
  border-radius: 5px;
  width: 110;
  text-align: center;
  background-color: #e7eaf6;
  margin-left: 6px;
  font-weight: bold;
  color: #ffb732;
`;

export const DataJob = styled.Text`
  margin-top: 15px;
  width: 150;
  text-align: center;
  background-color: #e7eaf6;
  margin-left: 6px;
  font-weight: bold;
  color: #38598b;
`;

export const BtnMd = styled.TouchableOpacity`
  width: 150;
  border-radius: 2px;
  margin-top: 20px;
  flex-direction: row;
`;

export const BtnMdText = styled.Text`
  font-size: 14px;
  color: #38598b;
  margin-left: 5px;
`;
