import React, { useState, useEffect } from "react";
import { Button, FlatList, Text, View } from 'react-native';
import Card from '../components/Card';
import listingsApi from "../api/listingsApi";
import AppButton from "../components/AppButton";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from "../config/colors";
import Loader from "../components/Loader";
// const initialListings = [
//   {
//     id: 1,
//     title: " Red Leather Jacket for sale!",
//     price: "100",
//     images: require("../images/jacket.jpg"),
//   },
//   {
//     id: 2,
//     title: " Used couch for sale",
//     price: "1000",
//     images: require("../images/couch.jpg"),
//   },
// ];

function ListingScreen({navigation}) {
  const [error, setError] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async() => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);
    
    if(!response.ok) return setError(true);
    setListings(response.data);
    setError(false);
    // console.log(response.data);

  }

  return (
    <>
      {error && (
        <>
          <MaterialCommunityIcons
            name="server-network-off"
            size={65}
            color={colors.medium}
            style={{ alignSelf: "center", padding: 30 }}
          />
          <AppButton title="Retry" onPress={loadListings} btnColor={"danger"} />
        </>
      )}
      <Loader visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"Kshs." + item.price}
            picture={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 101,
              title: "Nikon D850 for sale",
              images: [
                {
                  url: "http://192.168.0.102:9000/assets/camera2_full.jpg",
                  thumbnailUrl:
                    "http://192.168.0.102:9000/assets/camera2_thumb.jpg",
                },
              ],
              price: 350,
              categoryId: 3,
              userId: 1,
              location: { latitude: 37.78825, longitude: -122.4324 },
            },
            {
              id: 4,
              title: "Sectional couch - Delivery available",
              description: "No rips no stains no odors",
              images: [
                {
                  url: "http://192.168.0.102:9000/assets/couch3_full.jpg",
                  thumbnailUrl:
                    "http://192.168.0.102:9000/assets/couch3_thumb.jpg",
                },
              ],
            },
          ]);
        }}
      />
    </>
  );
}

export default ListingScreen;