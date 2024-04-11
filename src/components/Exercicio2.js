import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';

function Exercicio2() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>Count: {count}</Text>
            <Button title="Acrescentar" onPress={() => setCount(count + 1)} />
        </View>
    );
}

export default Exercicio2;
