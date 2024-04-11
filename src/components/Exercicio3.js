import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const Exercicio3 = () => {
    const [texto, setTexto] = useState('');

  return (
    <View>
        <TextInput
        placeholder= "Digite aqui"
        onChangeText={texto => setTexto(texto)}
        value={texto}
        />
        
        <Text>
        Texto digitado: {texto}
        </Text>
        
    </View>
  );
};

export default Exercicio3