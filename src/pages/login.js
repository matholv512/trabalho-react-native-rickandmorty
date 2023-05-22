import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleClickRedirect = () => {
      navigation.navigate('main')
  };

  const handleNavigateToRegister = () => {
    navigation.navigate('register'); 
  };

  return (
    <View style={styles.container}>

      <Image source={require('../assets/background-login.png')} 
            style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleClickRedirect}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNavigateToRegister}>
        <Text style={styles.buttonText}>Cadastrar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
  },
  input: {
      borderWidth: 1,
      borderColor: '#fff',
      color: '#fff',
      borderRadius: 5,
      padding: 10,
      marginVertical: 10,
      width: '80%',
  },
  button: {
      backgroundColor: '#ADFA09',
      borderRadius: 5,
      padding: 10,
      margin: 5,
      width: '80%',
      alignItems: 'center',
  },

  buttonText: {
      color: '#fff',
      fontWeight: 'bold',
  },

  image:{
      padding: 10,
      marginBottom: 35,
      width: 340,
      height: 300,
      alignItems: 'center',
  }

});

export default Login;