import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default location = () => {
  const [userLocation, setUserLocation] = useState();

  try {
      useEffect(() => {
        permission(); //takes functions
      }, []);

      const permission = async () => {
        const { granted } = await Location.requestBackgroundPermissionsAsync();
        if (!granted) return;
        const result = await Location.getCurrentPositionAsync();
        if (!result) return;
        const { latitude, longitude } = result.coords;
        setUserLocation({ latitude, longitude });
      };
  } catch (error) {
//   return 0 ;    
  }

  return userLocation;
};
