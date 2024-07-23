import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Jobs = () => {
  return (
    <View style={styles.contaner}>
      <Text>Search Jobs according to your interest</Text>
    </View>
  )
}

export default Jobs
const styles = StyleSheet.create({
    contaner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})