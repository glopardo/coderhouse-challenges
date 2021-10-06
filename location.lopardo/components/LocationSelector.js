import React, {useState} from "react";
import { View, Button, Image, Text, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from "./MapPreview";
import COLOR from '../constants/colors'
import styles from "../styles";

const LocationSelector = () => {
    const [pickedLocation, setPickedLocation] = useState();

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync()   ;
        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos de la localización para usar la aplicacion',
                [{text: 'Ok'}],
            )
            return false;
        }
        return true;
    }

    const handleGetLocation = async () => {
        const isLocationOk = await verifyPermissions();
        
        if (!isLocationOk) return;
        
        const location = await Location.getCurrentPositionAsync({
          timeout: 5000,
        })

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
    }

    return (
        <View style={styles.mapContainer}>
            <MapPreview location={pickedLocation} style={styles.mapPreview}>
                <Text>Buscando tu locación...</Text>
            </MapPreview>
            <Button 
                title="Obtener Location"
                color={COLOR.primary}
                onPress={handleGetLocation}
            />
        </View>
    );
}

export default LocationSelector;