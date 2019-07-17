import React, { useState, useEffect } from "react";
import { Image, Modal, View } from "react-native";

import WVDetailtJob from "~/components/WebViews/JobDetail/index";

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
} from "./styles";

export default function Job({ data }) {
  const [modalDetailJob, setModalDetailJob] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Container>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: data.url_logo_empresa,
            }}
          />
          <TituloJob style={{ fontFamily: "Quicksand" }}>
            {data.title_job}
          </TituloJob>
        </View>
        <Empresa style={{ fontFamily: "Quicksand" }}>{data.empresa}</Empresa>
        <Details>
          <Detail>
            {data.contratacao === "Estágio" ? (
              <TipoEstagio style={{ fontFamily: "Quicksand" }}>
                {data.contratacao}
              </TipoEstagio>
            ) : (
              <TipoVaga style={{ fontFamily: "Quicksand" }}>
                {data.contratacao}
              </TipoVaga>
            )}
          </Detail>
        </Details>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            <DataJob style={{ fontFamily: "Quicksand" }}>
              {data.data_job}
            </DataJob>
          </Detail>

          <BtnMd onPress={() => setModalDetailJob(!modalDetailJob)}>
            <BtnMdText style={{ fontFamily: "Quicksand" }}>
              Ver detalhes da vaga
            </BtnMdText>
          </BtnMd>
        </View>
      </Container>
    </View>
  );
}
