import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#F1C8DB',
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        color: '#40476d',
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
        marginLeft: 10,
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
});