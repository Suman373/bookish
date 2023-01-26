import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ROUTES from '../constants/routes';
import screens from '../screens/home/index';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            screenOptions={
                ({ route }) => ({
                    headerShown: false,
                    tabBarStyle:{
                        backgroundColor:'gold',
                        height:52
                    },
                    tabBarActiveTintColor:'#000',
                    tabBarLabelStyle:{
                        fontSize:13,
                    },
                    tabBarIcon: ({ color, size, focused }) => {
                        let iconName;
                        size = focused ? 28 : 25;
                        switch (route.name) {
                            case ROUTES.HOME_TAB:
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case ROUTES.FAVOURITES:
                                iconName = focused ? 'heart' : 'heart-outline';
                                break;
                            case ROUTES.PROFILE:
                                iconName = focused ? 'person' : 'person-outline';
                                break;
                            case ROUTES.SETTINGS:
                                iconName = focused ? 'settings' : 'settings-outline';
                                break;
                            default:
                                iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                                break;
                        }
                        return <>
                            <Icon name={iconName} size={size} color={color} />
                        </>
                    }
                })
            }>
            <Tab.Screen name={ROUTES.HOME_TAB} component={screens.Home} />
            <Tab.Screen name={ROUTES.FAVOURITES} component={screens.Favourites} />
            <Tab.Screen name={ROUTES.PROFILE} component={screens.Profile} />
            <Tab.Screen name={ROUTES.SETTINGS} component={screens.Settings} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;