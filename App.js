import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Routes } from "react-router-native";

import Home from './Components/Home';
import Products from './Components/Products';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>App is running</Text>
      
      <StatusBar style="auto" />
      <NativeRouter>
        <Link to="/"><Text>Home</Text></Link>
        <Link to="/home"><Text>Home</Text></Link>
        <Link to="/products"><Text>Our Products</Text></Link>
       <Routes>
       <Route path="/" element={<Home></Home>} ></Route>
       <Route path="/home" element={<Home></Home>} ></Route>
       <Route path="/products" element={<Products></Products>} ></Route>
       </Routes>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
