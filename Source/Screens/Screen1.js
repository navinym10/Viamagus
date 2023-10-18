import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Screen1 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen1</Text>
            <Button title='Click' onPress={() => navigation.navigate('Screen2')} />
        </View>
    )
}

export default Screen1