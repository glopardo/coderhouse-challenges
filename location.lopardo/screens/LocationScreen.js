import React from "react";
import { ScrollView } from "react-native";
import LocationSelector from '../components/LocationSelector';

const LocationScreen = () => {
    return (
        <ScrollView>
            <LocationSelector ></LocationSelector>
        </ScrollView>
    )
}

export default LocationScreen;