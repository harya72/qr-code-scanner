import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={styles.contaner}>
      <Text>Settings Screen</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    contaner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})