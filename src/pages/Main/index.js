import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import Job from '~/components/Job/index';

import { Container, Title, List } from './styles';

export default function Home() {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    function loadData() {
      try {
        const response = fetch('https://vagasqw.herokuapp.com/')
          .then(res => res.json())
          .then(dados => setVagas(dados));
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    loadData();
  }, []);

  if (vagas.length === 0) {
    return (
      <Container>
        <Title>QueroWorkar</Title>
        <ActivityIndicator
          color="#333"
          size="large"
          style={{
            flex: 1,
            height: 80
          }}
        />
      </Container>
    );
  }
  return (
    <Container>
      <Title>QueroWorkar</Title>

      <List
        keyboardShouldPersistTaps="handled"
        data={vagas}
        keyExtractor={item => String(item.title_job)}
        renderItem={({ item }) => <Job data={item} />}
      />
    </Container>
  );
}

Home.navigationOptions = {
  title: 'Home'
};
