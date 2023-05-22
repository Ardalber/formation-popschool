import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderToday from './components/HeaderToday';
import NextDay from './components/NextDay';
export default function App() {
  
   return (
    <View style={styles.container}>
      <HeaderToday></HeaderToday>
      <NextDay></NextDay>
      <NextDay></NextDay>
      <NextDay></NextDay>
      <NextDay></NextDay>
      <NextDay></NextDay>
      <NextDay></NextDay>
      <NextDay></NextDay>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
