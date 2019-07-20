import React, { useState, useEffect } from 'react';
import { Image, Modal, View, Share, Text } from 'react-native';

import WVDetailtJob from '~/components/WebViews/JobDetail/index';

import {
  Container,
  TituloJob,
  Empresa,
  Details,
  Detail,
  TipoVaga,
  TipoEstagio,
  DataJob,
  BtnMd,
  BtnMdText,
  Local
} from './styles';

export default function Job({ data }) {
  const [modalDetailJob, setModalDetailJob] = useState(false);

  function ShareMessage() {
    //Here is the Share API
    Share.share({
      message: data.url_job.toString(),
      title: 'Sharing'
    })
      //after successful share return result
      .then()
      //If any thing goes wrong it comes here
      .catch();
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}
    >
      <Container>
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: data.url_logo_empresa
            }}
          />
          <TituloJob style={{ fontFamily: 'Quicksand' }}>
            {data.title_job}
          </TituloJob>
        </View>
        <Empresa style={{ fontFamily: 'Quicksand' }}>{data.empresa}</Empresa>
        <Details>
          <Detail>
            <Local style={{ fontFamily: 'Quicksand' }}>{data.cidade}</Local>
          </Detail>
        </Details>
        <Details>
          <Detail>
            {data.contratacao === 'Estágio' ? (
              <TipoEstagio style={{ fontFamily: 'Quicksand' }}>
                {data.contratacao}
              </TipoEstagio>
            ) : (
              <TipoVaga style={{ fontFamily: 'Quicksand' }}>
                {data.contratacao}
              </TipoVaga>
            )}
          </Detail>
        </Details>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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

          <Detail>
            <DataJob style={{ fontFamily: 'Quicksand' }}>
              {data.data_job}
            </DataJob>
          </Detail>

          <BtnMd onPress={() => setModalDetailJob(!modalDetailJob)}>
            <BtnMdText style={{ fontFamily: 'Quicksand' }}>
              Detalhes da vaga
            </BtnMdText>
          </BtnMd>
        </View>

        <BtnMd onPress={() => ShareMessage()}>
          <BtnMdText
            style={{
              fontFamily: 'Quicksand',
              alignContent: 'center'
            }}
          >
            <Text style={{ textAlign: 'center' }}>Compartilhar vaga</Text>
          </BtnMdText>
        </BtnMd>
      </Container>
    </View>
  );
}
