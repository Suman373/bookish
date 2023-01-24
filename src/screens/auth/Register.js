import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import ROUTES from '../../constants/routes';

const Register = ({navigation}) => {

    const handleRegister = ()=>{
        // authenticate user
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

                <Text style={styles.registerSub}>Create your account to get started</Text>

                <View style={styles.inputWrapper}>
                    <TextInput 
                    placeholder='Email'
                    style={styles.textField}>
                        
                    </TextInput>
                    <TextInput 
                    placeholder='Password'
                    style={styles.textField}>
                    </TextInput>

                    <Button title={'Sign up'}
                    onPress={handleRegister}/>

                </View>

                <Text
                onPress={()=> navigation.navigate(ROUTES.LOGIN)} 
                style={styles.registerSub}>
                    Already have an account ? Sign in
                </Text>
        </View>
    )
}

export default Register;

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
    registerSub: {
        fontSize: 18,
        color: '#000',
        textAlign:'center',
        marginVertical: 7
    },
    inputWrapper: {
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