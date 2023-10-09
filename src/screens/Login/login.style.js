import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems:'center'
    },
    loginContainer:{
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputEmail:{
        width: '95%',
        height: 30,
        backgroundColor: colors.grey,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white
    },
    loginButton: {
        backgroundColor: colors.grey,
        width: '50%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText:{
        color: colors.white,
        alignSelf: 'center'
    },
});