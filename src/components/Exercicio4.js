import { View, Text } from 'react-native';
import React from 'react';

const Exercicio4 = () => {
  const lista = ['Pera', 'Goiaba', 'Melancia', 'Laranja'];
  return (
    <View>
      {lista.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default Exercicio4;
