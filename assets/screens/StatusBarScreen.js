import React from 'react';
import { StatusBar } from 'react-native';

function StatusBarScreen(props) {
    return (
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={"light-content"}
        showHideTransition={"slide"}
      />
    );
}

export default StatusBarScreen;