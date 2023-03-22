import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import React from 'react'
import Icons from '../Icons';

const handleBarCodeScanned = ({ type, data }) => {
    console.log(`Scanned data: ${data}`)
    console.log(`Scanned Type: ${type}`)
}

const Home = () => {
    const [FlashOn, setFlashOn] = useState(false)
    const [Type, setType] = useState(false)

    const HandleRotate = () => {
        setType(!Type)
    }

    const HandleTorch = async () => {
        setFlashOn(!FlashOn)

    }

    return (
        <View style={styles.flexCenter}>
            <View>
                <BarCodeScanner
                    // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camDisplay}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    onBarCodeScanned={handleBarCodeScanned}
                    type={Type ? 'front' : 'back'}
                >
                    <BarcodeMask edgeColor='#FFB824' useNativeDriver={true} animatedLineColor='#FFB824' showAnimatedLine={true} />
                </BarCodeScanner>

            </View>
            {/* This is where we style our top bar pretty cool right */}
            <View style={{ flex: 1, width: '90%', justifyContent: 'space-between', flexDirection: 'row', position: 'absolute', backgroundColor: '#333333', alignItems: 'center', top: 0, margin: 50, height: 50, borderRadius: 8, }}>
                <TouchableOpacity style={{ margin: 20 }} onPress={HandleTorch}>
                    <Image source={Icons.FlashIcon} resizeMode="contain" style={{ height: 30, width: 30, tintColor: 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20 }}>
                    <Image source={Icons.ImageFrame} resizeMode="contain" style={{ height: 30, width: 30, tintColor: 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: 20 }} onPress={HandleRotate}>
                    <Image source={Icons.Rotate} resizeMode="contain" style={{ height: 30, width: 30, tintColor: 'white' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    flexCenter: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    camDisplay: {
        zIndex: 1,
        width: Dimensions.get('window').width * 1.8,
        height: Dimensions.get('window').height,
    },
});

export default Home