import React, { useState } from 'react';
import {ImageBackground, StyleSheet } from "react-native";
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import ErrorMessages from '../components/ErrorMessages';
import AppCategoryPicker from '../components/AppCategoryPicker';
import AppImageInput from "../components/AppImageInput";
import useLocation from './CustomHooks/useLocation';
import listingsApi from '../api/listingsApi';
import UploadScreen from './UploadScreen';

const categories = [
  { value: 1, label: "Furniture", icon: "seat", bgcolor: "primary" },
  { value: 2, label: "Clothing", icon: "lingerie", bgcolor: "secondary" },
  { value: 3, label: "Cameras", icon: "camera", bgcolor: "black" },
  { value: 4, label: "Cars", icon: "car", bgcolor: "warning" },
  { value: 5, label: "Electronics", icon: "television", bgcolor: "primary" },
  { value: 6, label: "Farm", icon: "tractor", bgcolor: "secondary" },
  { value: 7, label: "Tools", icon: "wrench", bgcolor: "black" },
  { value: 8, label: "Food", icon: "ice-cream", bgcolor: "warning" },
];

const validationSchema = yup.object().shape({
  title: yup.string().required().label("Title"),
  price: yup.number().required().positive().label("Price"),
  description: yup.string().required().label("Description"),
  imageUrl: yup.array().min(1, "Select at least 1 image!")
});

function AddProductScreen() {
  const [loadingVisibility, setLoadingVisibility] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const location = useLocation();

  const [category, setCategory] = useState(categories[3].label);

  const handleSubmit = async (listing) =>{
    // listing.location = location;
    // const response = await listingsApi.postListings(listing, (progress) => console.log(progress));/
    setUploadProgress(0); //reset upload!
    setLoadingVisibility(true);
    const response = await listingsApi.postListings(listing, (progress) => setUploadProgress(progress));
    
    if(!response.ok) 
    {
      setLoadingVisibility(false);
      return alert(response.problem);
    }
    // alert('Success!')
  }
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <UploadScreen visibility={loadingVisibility} progress={uploadProgress} onDone={()=> setLoadingVisibility(false)}/>
        <Formik
          initialValues={{
            imageUrl: [],
            title: "",
            price: "",
            description: "",
            category: "",
            userLoc: [],
          }}
          // onSubmit={(values) => console.log(values)}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
            setFieldValue,
          }) => (
            <>
              <AppImageInput
                name="imageUrl"
                onImageSelect={(imageArray) => {
                  setFieldValue("imageUrl", imageArray);
                }}
              />
              <ErrorMessages error={errors.imageUrl} visible={true} />

              <AppInputText
                autoCapitalize={"none"}
                autoCorrect={true}
                autoComplete={"none"}
                onBlur={() => {
                  setFieldTouched("title"), setFieldValue("userLoc", location);
                }}
                onChangeText={handleChange("title")}
                placeholder={"Title"}
              />
              <ErrorMessages error={errors.title} visible={touched.title} />

              <AppInputText
                autoCapitalize={"none"}
                autoCorrect={true}
                autoComplete={"none"}
                onBlur={() => setFieldTouched("price")}
                onChangeText={handleChange("price")}
                placeholder={"Price"}
                keyboardType={"numeric"}
              />
              <ErrorMessages error={errors.price} visible={touched.price} />

              <AppCategoryPicker
                selected={category}
                onSelect={(item) => {
                  setCategory(item), setFieldValue("category", item);
                }}
                placeholder={"Categories"}
                icon={"apps"}
                labels={categories}
                onChangeText={handleChange("category")}
              />

              <AppInputText
                autoCapitalize={"none"}
                autoCorrect={true}
                autoComplete={"none"}
                multiline={true}
                numberOfLines={4}
                onBlur={() => setFieldTouched("description")}
                onChangeText={handleChange("description")}
                placeholder={"Description"}
              />
              <ErrorMessages
                error={errors.description}
                visible={touched.description}
              />

              <AppButton
                btnColor="danger"
                title="Post"
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding : 10
  },
});
export default AddProductScreen;