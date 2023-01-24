import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import ROUTES from '../../constants/routes';

const Login = ({navigation}) => {

    const handleLogin = ()=>{
        // authenticate user
        // navigation.navigate(ROUTES.HOME);
    }

    return (
        <View style={styles.loginWrapper}>
            <Image 
                style={styles.imageBg}
                source={require('../../assets/bg1.jpg')} />
                
               <Image 
                style={styles.logo}
                source={require('../../assets/logo.png')}/>

                <Text style={styles.loginSub}>Sign in to get back to your account</Text>

                <View style={styles.inputWrapper}>
                    <TextInput 
                    placeholder='Email'
                    style={styles.textField}>
                        
                    </TextInput>
                    <TextInput 
                    placeholder='Password'
                    style={styles.textField}>
                    </TextInput>

                    <Button title={'Login'}
                    onPress={handleLogin}/>
                    
                    <Text style={styles.loginSub}
                    onPress={()=> navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
                        Forgot Password?
                    </Text>

                </View>

                <Text
                onPress={()=> navigation.navigate(ROUTES.REGISTER)} 
                style={styles.loginSub}>
                    Don't have an account ? Sign up
                </Text>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    loginWrapper: {
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
    loginSub: {
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
        // backgroundColor:'rgba(0,0,0,0.2)'
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