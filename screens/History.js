import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/header'

const History = () => {
    const [Selected, setSelected] = useState('scanned')

    const Selector = () => {
        return (
            <View style={{ width: '90%', paddingHorizontal: 24, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => setSelected('scanned')}>
                    <Text style={{ fontSize: 16, color: Selected == 'scanned' ? 'black' : '#A2A2A2' }}>Scanned</Text>
                    {Selected == 'scanned' ? <View style={{ borderRadius: 10, borderBottomColor: 'black', borderBottomWidth: 3 }} /> : ''}
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => setSelected('generated')}>
                    <Text style={{ fontSize: 16, color: Selected == 'generated' ? 'black' : '#A2A2A2' }}>Generated</Text>
                    {Selected == 'generated' ? <View style={{ borderRadius: 10, borderBottomColor: 'black', borderBottomWidth: 3 }} /> : ''}
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', alignItems: 'center', margin: 30 }}>
            <Header HeaderText="History" />
            <Selector />
        </SafeAreaView>
    )
}

export default History