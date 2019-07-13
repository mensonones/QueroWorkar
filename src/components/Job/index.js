import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, Modal, View } from 'react-native';

import WVDetailtJob from '~/components/WebViews/JobDetail/index';

import {
  Container,
  Name,
  Description,
  Details,
  Detail,
  DetailExtra,
  BtnMd,
  BtnMdText
} from './styles';

export default function Job({ data }) {
  const [modalDetailJob, setModalDetailJob] = useState(false);
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

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalDetailJob}
        onRequestClose={() => {
          setModalDetailJob(!modalDetailJob);
        }}
      >
        <WVDetailtJob data={data} />
      </Modal>

      <BtnMd onPress={() => setModalDetailJob(!modalDetailJob)}>
        <Icon name="eye" color="#333" size={16} />
        <BtnMdText>Ver detalhes</BtnMdText>
      </BtnMd>
    </Container>
  );
}
