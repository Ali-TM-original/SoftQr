import { View, Text } from 'react-native'
import React from 'react'

const Header = ({ HeaderText }) => {
    return (
        <View>
            <Text style={{ color: 'black', fontSize: 25, fontWeight: '700' }}>{HeaderText}</Text>
        </View>
    )
}

export default Header