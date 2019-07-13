import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image } from 'react-native';

import {
  Container,
  Name,
  Description,
  Details,
  Detail,
  DetailExtra
} from './styles';

export default function Job({ data }) {
  return (
    <Container>
      <Name>{data.title_job}</Name>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: data.url_logo_empresa
        }}
      />
      <Description>{data.empresa}</Description>

      <Details>
        <Detail>
          <Icon name="user" size={16} color="#333" />
          <DetailExtra>{data.contratacao}</DetailExtra>
        </Detail>
        <Detail>
          <Icon name="calendar" size={16} color="#333" />
          <DetailExtra>{data.data_job}</DetailExtra>
        </Detail>
      </Details>
    </Container>
  );
}
