import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native'
import ContatoItem from '../components/ContatoItem';
import ContatosInput from '../components/ContatosInput';

export default function TelaContato(){
const [id, setId] = useState(2);
const [contatos, setContatos] = useState([])
const [contadorContatos, setContadorContatos] = useState(0);


const adicionarContato = (nome,numero) =>{
  contato=(id, nome, numero);
  setContatos((contatos) => {
    console.log(contatos);
    setId(id +2);
    setContadorContatos(contadorContatos + 1);
    return [...contatos, {key: contadorContatos.toString(), value:contato = (id), value2:
    contato=(nome), value3:contato=(numero)}];
  }) 
};


const removerContato = (id) =>{
    setContatos (contatos => {
      return contatos.filter ((contato) =>{
        return contato.key !== id
      })
    });
}


  return (
    <View style={styles.telaPrincipalView}>

    <ContatosInput onAdicionarContato={adicionarContato}
    
    />
      <FlatList
      data={contatos}
      renderItem={
        contato =>(
          <ContatoItem
          chave={contato.item.key}
          id={contato.item.value}
          nome={contato.item.value2}
          numero={contato.item.value3}
          onDelete={removerContato}
          />
        )
      }
      />
    </View>
    
  );

}

const styles = StyleSheet.create(
  {
    telaPrincipalView:{
      padding: 50
    }
  }
);