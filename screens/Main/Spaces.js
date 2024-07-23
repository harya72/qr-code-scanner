import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spaces = () => {
  return (
    <View style={styles.contaner}>
      <Text>Create your own Space</Text>
    </View>
  )
}

export default Spaces

const styles = StyleSheet.create({
    contaner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})