import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../constants/routes';
import home from '../screens/home/index';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    console.log(home);

    return (
        <Tab.Navigator
        screenOptions={
           ({route})=> ({
            headerShown:false,
            tabBarIcon: ({color,size,focused})=>{
                let iconName;
                switch(route.name){
                    case ROUTES.HOME_TAB:
                       iconName =  focused ? 'home' : 'home-outline';
                    case ROUTES.SETTINGS:
                       iconName =  focused ? 'settings' : 'settings-outline';
                    case ROUTES.NOTIFICATION:
                       iconName =  focused ? 'notifications' : 'notifications-outline';
                    default :
                        // iconName = focused ? 'box' : 'box';
                }


                return <>
                <Icon name={iconName} size={22} color={color}/>
                </>
            }
           })
        }>
            <Tab.Screen name={ROUTES.HOME_TAB} component={home.Home} />
            <Tab.Screen name={ROUTES.SETTINGS} component={home.Settings} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;