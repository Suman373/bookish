import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.profileWrapper}>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
    profileWrapper:{
        flex:1,
        backgroundColor: 'green',
        width: '100%',
        paddingHorizontal: 5
    }
});