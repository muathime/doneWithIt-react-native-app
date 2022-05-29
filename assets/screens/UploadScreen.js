import React from 'react';
import { View, StyleSheet, Modal, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({visibility, progress = 0, onDone}) {
   return (
     <Modal visible={visibility}>
       <View style={styles.container}>
         {/* <Text>{progress} % </Text> */}
         {progress < 1 ? 
         (<Progress.Bar width={200} color={colors.danger} progress={progress * 100} />)
          : 
          (<LottieView source={require('../animations/done.json')} autoPlay loop={false} onAnimationFinish={onDone} style={styles.animation}/>) }
       </View>
     </Modal>
   );
}

const styles = StyleSheet.create({
  animation:{
    width: 200,
    height: 200
  },
   container: {
     alignContent: 'center',
     flex: 1, 
     justifyContent: 'center',
     alignItems : 'center'
    }
});

export default UploadScreen;