import { StyleSheet } from "react-native";
import COLORS from "../constants/colors";

export default StyleSheet.create({
    listScreen: {
        padding: 15,
        flex: 1,
    },
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: '#279af1',
        alignItems: 'center'
    },
    divider: {
        marginTop: 15,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
    inputContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#E2E2E2',
    },
    input: {
        marginLeft: 10,
    },
    item: {
        padding: 0,
        marginTop: 5,
        marginRight: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
      },
    itemText: {
        textAlignVertical: 'center',
        color: '#d3fcd5',
        marginLeft: 10,
        fontFamily: 'ubuntu'
    },
    buttonText: {
        color:'white',
        textAlign: 'center'
    },
    button: {
        textAlign: 'center',
        backgroundColor: '#2CBCDE',
        width: 20,
        height: 20,
    },
    modalHeader:{
        padding: 15,
        fontSize: 20,
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
    },
    modalButtonContainer: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 15,
    },
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 0,
        height: 45,
        backgroundColor: COLORS.accent,
    },
    card: {
        padding: 20,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    principalCard: {
        marginTop: 10,
        width: 300,
        alignSelf: 'center'
    },
    principalCardText:{
        fontFamily: 'ubuntu',
    },
    tabShadow: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
      },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    mapContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    mapPreview: {
        padding: 10,
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },
    mapImage: {
        width: '100%',
        height: '100%',
    }
    
});