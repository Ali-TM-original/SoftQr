import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';


import React from 'react'

const Home = () => {
    return (
        <View style={styles.flexCenter}>
            <View>
                <BarCodeScanner
                    // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={styles.camDisplay}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                >
                    <BarcodeMask edgeColor='#FFB824' useNativeDriver={true} animatedLineColor='#FFB824' showAnimatedLine={true} />
                </BarCodeScanner>

            </View>
            {/* This is where we style our top bar pretty cool right */}
            <View style={{ position: 'absolute', backgroundColor: 'red', top: 0, margin: 50 }}>
                <Text style={{ color: 'white' }}>Hello World</Text>
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