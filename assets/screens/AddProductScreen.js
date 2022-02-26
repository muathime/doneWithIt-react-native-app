import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from "react-native";
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import ErrorMessages from '../components/ErrorMessages';
import AppPicker from '../components/AppPicker';

const categories = [
  { value: 1, label: "Furniture" },
  { value: 2, label: "Clothing" },
  { value: 3, label: "Cameras" },
  { value: 4, label: "Cars" },
];

const validationSchema = yup.object().shape({
title : yup.string().required().label('Title'),
price : yup.number().required().positive().label('Price'),
description: yup.string().required().label('Description')
});

function AddProductScreen() {
  const [category, setCategory] = useState(categories[3].label);
    return (
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <Formik
          initialValues={{ title: "", price: "", description: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppInputText
                autoCapitalize={"none"}
                autoCorrect={true}
                autoComplete={"none"}
                onBlur={() => setFieldTouched("title")}
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
              />
              <ErrorMessages error={errors.price} visible={touched.price} />

              <AppPicker
                selected={category}
                onSelect={(item) => setCategory(item)}
                placeholder={"Categories"}
                icon={"apps"}
                labels={categories}
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