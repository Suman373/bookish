import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Settings = () => {
    return (
        <View style={styles.settingsWrapper}>
            <Text>
                SETTINGS SCREEN
            </Text>
        </View>
    )
}

export default Settings;

const styles = StyleSheet.create({
    settingsWrapper: {
        flex:1,
        backgroundColor: 'pink',
        width: '100%',
        paddingHorizontal: 5
    }
});