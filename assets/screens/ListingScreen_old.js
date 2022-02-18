import React from 'react';
import { View } from 'react-native';

import Card from '../components/Card';
function ListingScreen() {
  return (
    <View>
      <Card
        title="Leather Jacket for sale"
        subtitle="Ksh 1,000"
        picture={require("../images/jacket.jpg")}
      />

      <Card
        title="Used leather couch"
        subtitle="Ksh 19,000"
        picture={require("../images/couch.jpg")}
      />

      <Card
        title="Used leather couch"
        subtitle="Ksh 19,000"
        picture={require("../images/couch.jpg")}
      />
    </View>
  );
}

export default ListingScreen;