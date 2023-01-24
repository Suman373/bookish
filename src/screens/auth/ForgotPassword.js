import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import ROUTES from '../../constants/routes';

const ForgotPassword = ({navigation}) => {

    const handleForgotPassword = ()=>{
        // authenticate password change
        navigation.navigate(ROUTES.LOGIN);
    }

    return (
        <View style={styles.registerWrapper}>
            <Image 
                style={styles.imageBg}
                source={require('../../assets/bg1.jpg')} />
                
               <Image 
                style={styles.logo}
                source={require('../../assets/logo.png')}/>

                <Text style={styles.forgotPassSub}>Reset the password of your account</Text>

                <View style={styles.inputWrapper}>
                    <TextInput 
                    placeholder='New password'
                    style={styles.textField}>
                        
                    </TextInput>
                    <TextInput 
                    placeholder='Confirm password'
                    style={styles.textField}>
                    </TextInput>

                    <Button title={'Update'}
                    onPress={handleForgotPassword}/>
                </View>
        </View>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    registerWrapper: {
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    logo:{
        textAlign:'center',
        objectFit:'contain',
        
    },
    imageBg: {
        position: 'absolute',
        zIndex:-1,
        opacity: 0.5,
        objectFit: 'cover'
    },
    forgotPassSub: {
        fontSize: 18,
        color: '#000',
        textAlign:'center',
        marginVertical: 7
    },
    inputWrapper: {
        flex:1/2,
        marginHorizontal:'auto',
        width: '80%',
        paddingHorizontal: 10,
    },
    textField:{
        width:'100%',
        height:50,
        marginVertical:10,
        borderRadius:8,
        borderWidth:1,
        borderColor:'gold',
        backgroundColor:'#fff',
        fontSize:18,
        padding:8,
        color:'#000',

    }
})