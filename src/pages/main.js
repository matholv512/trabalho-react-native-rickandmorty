import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Container, Input, List, Image, TextTitle, Text, Button } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = () => {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]); 
  const [savedCharacters, setsavedCharacters] = useState([]);
  const [moreDetails, setMoreDetails] = useState();

  useEffect(() => {
    loadCharacters();
  });

  const searchCharacters = async () => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?name=${search}`
      );
      const data = await res.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    }
    Keyboard.dismiss();
  };

  // preciso consertar o text input do details sumindo
  const showMoreDetails = (item) => {
    setMoreDetails(item)
  }

  const characterSave = async (itemCharacter) => {
    try {
      const getSavedCharacters = await AsyncStorage.getItem('savedCharacters');
      let vetAuxCharacters = [];

      // salvando oq já existe no vetor, para poder fazer um push com um novo personagem
      if (getSavedCharacters) {
        vetAuxCharacters = JSON.parse(getSavedCharacters); // converte de str para obj e salva no vet
      }

      vetAuxCharacters.push(itemCharacter); // add no vetvetAuxCharacters
      vetAuxCharacters = JSON.stringify(vetAuxCharacters) // convertendo em str novamente para poder salvar
      await AsyncStorage.setItem('savedCharacters', vetAuxCharacters); // salvando noAsyncStorage
      loadCharacters(); // somente att o savedCharacters
    } catch (error) {
      console.log(error);
    }
  };

  const characterDelete = async (itemCharacter) => {
    try {
      const getSavedCharacters = await AsyncStorage.getItem('savedCharacters');
      let vetAuxCharacters = [];

      if (getSavedCharacters) {
        vetAuxCharacters = JSON.parse(getSavedCharacters);
      }

      // se o id for diferente, ele salva no vetor updateCharacters, se for igual ele vai deixar de fora do vetor, e excluir.
      let updateCharacters = [];
      for (let i = 0; i < vetAuxCharacters.length; i++) {
        if (vetAuxCharacters[i].id !== itemCharacter.id) {
          updateCharacters.push(vetAuxCharacters[i]);
        }
      }

      updateCharacters = JSON.stringify(updateCharacters);
      await AsyncStorage.setItem('savedCharacters', updateCharacters);
      loadCharacters();
    } catch (error) {
      console.log(error);
    }
  };


  const loadCharacters = async () => {
    try {
      const getSavedCharacters = await AsyncStorage.getItem('savedCharacters');
      let vetAuxCharacters = [];

      if (getSavedCharacters) {
        vetAuxCharacters = JSON.parse(getSavedCharacters); 
      }

      setsavedCharacters(vetAuxCharacters); // somente att o savedCharacters
    } catch (error) {
      console.log(error);
    }
  };


  const renderCharacter = ({ item }) => (
    <TouchableOpacity style={styles.Card}>
      <Image source={{ uri: item.image }} />
      <TextTitle>{item.name}</TextTitle>
      <Text>Status: {item.status}</Text>
      {/* <Text>Espécie: {item.species}</Text> */}
      {/* <Text>Gênero: {item.gender}</Text> */}
      <Text >Última localização: {item.location.name}</Text>
      <Text>Primeira Aparição: {item.episode[0].split('https://rickandmortyapi.com/api/').join('').replace('/', ' ')}</Text>
      {moreDetails === item && (
        <>
          <Text>Gênero: {item.gender}</Text>
          <Text>Espécie: {item.species}</Text>
          <Text>Origem: {item.origin.name}</Text>
        </>
      )}
      <Button style={styles.Button} onPress={() => showMoreDetails(item)}><Text>Detalhes</Text></Button>
      {savedCharacters.some((savedCharacter) => savedCharacter.id === item.id) ? (
        <Button style={styles.Button} onPress={() => characterDelete(item)}><Text>Deletar</Text></Button> // se possui id igual, pode deletar, senão pode salvar
      ) : (
        <Button style={styles.Button} onPress={() => characterSave(item)}><Text>Salvar</Text></Button>
      )}
    </TouchableOpacity>
  );

  return (
    <Container style={styles.container}>
      <Input
        placeholder="Nome do personagem"
        onChangeText={(text) => setSearch(text)}
        value={search}
      />
      <Button style={styles.Button} onPress={searchCharacters}><Text>Pesquisar</Text></Button>
      <List
        data={search === '' ? savedCharacters : characters} // se a pesquisa for vazia mostra os char salvos, se não, mostra os char pesquisados.
        renderItem={renderCharacter}
        keyExtractor={(item) => item.id.toString()}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
  Card: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ADFA09',
    borderRadius: 5,
    elevation: 2,
    color: '#fff'
  },
  Button: {
    backgroundColor: '#ADFA09',
  }
});

export default Main;
