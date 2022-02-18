import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Card from '../components/Card'
const initialListings = [
  {
    id: 1,
    title: " Red Leather Jacket for sale!",
    price: "100",
    image: require("../images/jacket.jpg"),
  },
  {
    id: 2,
    title: " Used couch for sale",
    price: "1000",
    image: require("../images/couch.jpg"),
  },
];
function ListingScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState(initialListings);

  return (
    <FlatList
      data={listings}
      keyExtractor={(data) => data.id.toString()}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          subtitle={"Kshs." + item.price}
          picture={item.image}
        />
      )}
      refreshing={refreshing}
      onRefresh={() => {
        setListings([
          {
            id: 3,
            title: " Used couch for sale",
            price: "1000",
            image: require("../images/couch.jpg"),
          },
          {
            id: 4,
            title: " Used couch for sale",
            price: "1000",
            image: require("../images/jacket.jpg"),
          },
          {
            id: 5,
            title: " Used couch for sale",
            price: "1000",
            image: require("../images/couch.jpg"),
          },
        ]);
      }}
    />
  );
}

export default ListingScreen;