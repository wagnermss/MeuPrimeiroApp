import React from 'react';
import { View } from 'react-native';
import Exercicio1 from './src/components/Exercicio1';
import Exercicio2 from './src/components/Exercicio2';

export default function App() {
  return (
    <View>
      <Exercicio1 name={"Wagner"} />
      <Exercicio2/>
    </View>
  );
}