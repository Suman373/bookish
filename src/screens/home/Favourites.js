import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Favourites = () => {
  return (
    <View style={styles.favouritesWrapper}>
      <Text>FAVOURITES SCREEN</Text>
    </View>
  )
}

export default Favourites;

const styles = StyleSheet.create({
    favouritesWrapper:{
        flex:1,
        width:'100%',
        backgroundColor:'magenta',
        paddingHorizontal:5,
    }
})