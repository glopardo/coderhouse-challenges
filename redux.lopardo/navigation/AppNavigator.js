import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PrincipalScreen from "../screens/PrincipalScreen";
import ListScreen from "../screens/ListScreen";

import COLORS from "../constants/colors";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName=""
                screenOptions={{
                    headerStyle:{
                        backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                    },
                    headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={PrincipalScreen}
                    options={{ 
                    title: "Tu perfil",
                    headerStyle: {backgroundColor: COLORS.primary}
                }} />
                <Stack.Screen
                    name="Seguidos"
                    component={ListScreen}
                    options={({ route }) => ({
                        title: "Usuarios a los que seguís",
                        headerStyle: {backgroundColor: COLORS.accent}
                })}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;