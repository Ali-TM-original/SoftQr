import React from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import Icons from "../Icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { Home, Generate, History } from "../screens";

const Tab = createBottomTabNavigator()

const CustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={{
            top: -40,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Scanner"
            screenOptions={{
                headerShown: false, tabBarShowLabel: false, tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    borderTopColor: 'transparent',
                    backgroundColor: '#333333',
                    borderRadius: 8,
                    height: 80,
                    margin: 20,
                    marginBottom: 30
                }
            }}
        >
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={Icons.History}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#FFB824' : '#868686'
                                }} />
                            <Text style={{ color: focused ? '#FFB824' : '#868686' }}>History</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Scanner"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', borderRadius: 40, backgroundColor: '#FFB824', height: 60, width: 60 }}>
                            <Image source={Icons.Scan}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30
                                }} />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <CustomButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Generate"
                component={Generate}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={Icons.Generate}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#FFB824' : '#868686'
                                }} />
                            <Text style={{ color: focused ? '#FFB824' : '#868686' }}>Generate</Text>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#333333',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5
    }
})

export default Tabs;