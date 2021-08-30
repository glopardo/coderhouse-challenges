import { StyleSheet } from "react-native";

export default StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        backgroundColor: '#279af1',
        alignItems: 'center'
    },
    headerText: {
        marginTop: 15,
        fontSize: 25,
        textAlign: 'center',
        color: '#d3fcd5',
        fontFamily: 'ubuntu-bold'
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
    principalHeader: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 30,
        color: '#d3fcd5',
        fontFamily: 'ubuntu-bold'
    },
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        borderRadius: 0,
        height: 45,
        backgroundColor: '#08415c',
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
        marginBottom: 20,
    },
});