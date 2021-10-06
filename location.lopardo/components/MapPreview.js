import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import { MAP } from '../constants';
import styles from "../styles";

const MapPreview = (props) => {
    let mapPreviewUrl = '';
    if (props.location) {
        mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}&key=${MAP.API_KEY}`;
    }
    return (
        <View style={{...styles.mapPreview, ...props.style}}>
            {props.location
            ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
            : (props.children)}
        </View>
    )
}

export default MapPreview;