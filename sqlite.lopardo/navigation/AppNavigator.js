import React from "react";
import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import PrincipalScreen from "../screens/PrincipalScreen";
import ListScreen from "../screens/ListScreen";
import styles from "../styles";

const BottomNavigator = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <BottomNavigator.Navigator
                screenOptions={{
                    tabBarStyle: {...styles.tabShadow, ...styles.tabBar},
                }}
                initialRouteName="Home"
                styles={styles.tabShadow, styles.tabBar}
            >
                <BottomNavigator.Screen
                    name="HomeTab"
                    component={PrincipalScreen}
                    options={{
                        tabBarIcon: () => (
                            <View style={styles.tabItem}>
                                <Ionicons name="md-person" size={24} color="black" />
                                <Text>Tu perfil</Text>
                            </View>
                        ),
                        title: "Tu perfil",
                        tabBarShowLabel: false
                      }}
                />
                <BottomNavigator.Screen
                    name="FollowedTab"
                    component={ListScreen}
                    options={{
                        title: "Usuarios a los que seguís",
                        tabBarIcon: () => (
                            <View style={styles.tabItem}>
                                <Ionicons name="md-list" size={24} color="black" />
                                <Text>Usuarios seguidos</Text>
                            </View>
                        ),
                        tabBarShowLabel: false
                    }}/>
            </BottomNavigator.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;