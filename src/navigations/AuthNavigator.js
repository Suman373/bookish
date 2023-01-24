import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '../screens/auth/index';
import ROUTES from '../constants/routes';

const Stack = createStackNavigator();
// Navigator, Screen, Group -> objects from Stack


const AuthNavigator = () => {
    return (
        <Stack.Navigator 
        screenOptions={{
            headerTintColor:'#000',
            headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'gold',
            },
            
        }} 
        initialRouteName={ROUTES.LOGIN}
        >
            <Stack.Screen name={ROUTES.LOGIN} component={auth.Login} />
            <Stack.Screen name={ROUTES.REGISTER} component={auth.Register} />
            <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={auth.ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;
