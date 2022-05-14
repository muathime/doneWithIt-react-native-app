import React from 'react';
import LottieView from "lottie-react-native";
function Loader({visible}) {
   if(!visible) return null;
   return <LottieView 
   autoPlay
   loop
   source={require('../animations/loader.json')}
   />
}

export default Loader;