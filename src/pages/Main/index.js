import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Picker, Animated } from 'react-native';

import OneSignal from 'react-native-onesignal';

import Job from '~/components/Job/index';

import ID from '~/util/onesignal';

import { Container, Title, List } from './styles';

export default function Home() {
  const [vagas, setVagas] = useState([]);
  const [selectValue, setSelectValue] = useState();
  const [data, setData] = useState([]);

  function filterSelect(value) {
    if (value === 'Estágio') {
      const newData = vagas.filter(item => {
        const itemData = item.contratacao;
        const textData = value;
        return itemData.indexOf(textData) > -1;
      });

      setData(newData);
    }

    if (value === 'Emprego') {
      const newData = vagas.filter(item => {
        const itemData = item.contratacao;
        const textData = value;
        return itemData.indexOf(textData) > -1;
      });

      setData(newData);
    }

    if (value === 'Todos') {
      setData(vagas);
    }
  }

  function loadData() {
    try {
      const response = fetch('https://vagasqw.herokuapp.com/')
        .then(res => res.json())
        .then(dados => setVagas(dados));
    } catch (err) {}
  }

  function receivedPush(push) {}

  function openedPush(push) {}

  function idsPush(push) {}

  useEffect(() => {
    OneSignal.init(ID);
    OneSignal.addEventListener('received', receivedPush);
    OneSignal.addEventListener('opened', openedPush);
    OneSignal.addEventListener('ids', idsPush);
    OneSignal.inFocusDisplaying(2);
  }, []);

  useEffect(() => {
    loadData();
  }, []);

  if (vagas.length > 0) {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#576491',
            justifyContent: 'space-between'
          }}
        >
          <Title style={{ fontFamily: 'Quicksand' }}>QueroWorkar</Title>

          <Picker
            style={{
              marginTop: 20,
              width: '35%',
              color: '#EBF5FD'
            }}
            selectedValue={selectValue || 'Todos'}
            onValueChange={value => {
              filterSelect(value);
              setSelectValue(value);
            }}
          >
            <Picker.Item label="Todos" value="Todos" />
            <Picker.Item label="Estágio" value="Estágio" />
            <Picker.Item label="Emprego" value="Emprego" />
          </Picker>
        </View>

        <Animated.ScrollView>
          <Container>
            <List
              keyboardShouldPersistTaps="handled"
              data={data.length === 0 ? vagas : data}
              onEndReached={loadData}
              onEndReachedThreshold={0.1}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => <Job data={item} />}
            />
          </Container>
        </Animated.ScrollView>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#576491',
            justifyContent: 'space-between'
          }}
        >
          <Title style={{ fontFamily: 'Quicksand' }}>QueroWorkar</Title>
        </View>
        <Container>
          <ActivityIndicator
            color="#e7eaf6"
            size="large"
            style={{
              flex: 1,
              height: 80
            }}
          />
        </Container>
      </>
    );
  }
}

Home.navigationOptions = {
  title: 'Home'
};
