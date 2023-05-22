import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [fone, setFone] = useState('');
    const [course, setCourse] = useState('');

    const navigation = useNavigation();

    const handleRegister = () => {
          navigation.navigate('login');
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            value={name}
            onChangeText={setName}
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
            placeholder="CPF"
            placeholderTextColor="#fff"
            value={cpf}
            onChangeText={setCpf}
            />
            <TextInput
            style={styles.input}
            placeholder="Telefone"
            placeholderTextColor="#fff"
            value={fone}
            onChangeText={setFone}
            />
            <TextInput
            style={styles.input}
            placeholder="Curso"
            placeholderTextColor="#fff"
            value={course}
            onChangeText={setCourse}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      color: '#fff',
      marginVertical: 10,
      width: '80%',
    },
    button: {
      backgroundColor: '#ADFA09',
      borderRadius: 5,
      padding: 10,
      width: '80%',
      color: '#fff',
      alignItems: 'center',
      marginBottom: 7,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

export default Register;