import { Image, StyleSheet, View } from 'react-native';

import { useRouter } from 'expo-router';
import Home from './home';

import Localidade from './localidade';



export default function HomeScreen() {
  return (
   <View>
    <Home/>
    <Localidade/>
   </View>
   
  );
}

const styles = StyleSheet.create({
  
});
