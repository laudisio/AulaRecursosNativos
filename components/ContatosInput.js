import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native';


const ContatosInput = (props) => {
    const [ nome, setNome] = useState('');
    const [ numero, setNumero] = useState('');
    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarNumero = (numero) =>{
        setNumero(numero);
    }

    return (
        <View style={styles.contatoView}>

            <TextInput 
                placeholder="Nome"
                style={styles.contatoInputText}
                onChangeText={capturarNome}
                value ={nome}
            />
     
            <TextInput 
                placeholder="Contato"
                style={styles.contatoInputText}
                onChangeText={capturarNumero}
                value={numero}
                />
            <View>
            <Button
                title="+"
                    onPress={() => props.onAdicionarContato(nome,numero)}
            /> 
            </View>
      </View>
      
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
      },
  
      contatoInputText:{
        width: '50%',
        borderBottomWidth: 1,
        padding: 2
      }
})

export default ContatosInput;