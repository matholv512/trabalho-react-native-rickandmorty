import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background-color: '#000';
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor:'#fff',
})`
    height: 40px;
    background: #000;
    border-radius: 4px;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #eee;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const Image = styled.Image`
    width: 320px;
    height: 250px;
    border-radius: 5px;
    background: #eee;
    margin-bottom: 10px;
`;

export const TextTitle = styled.Text`
    font-size: 25px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 5px;
`;

export const Text= styled.Text`
    color: #fff;
`;

export const Button = styled(RectButton)`
    margin-top: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #3498db;
    justify-content: center;
    align-items: center;
    height: 36px;   
    color: '#fff';
`;