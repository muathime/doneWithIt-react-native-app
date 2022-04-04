import React, { useState } from 'react';
import { ImageBackground, StyleSheet } from "react-native";
import AppButton from '../components/AppButton';
import AppInputText from '../components/AppInputText';
import { Formik, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import ErrorMessages from '../components/ErrorMessages';
import AppCategoryPicker from '../components/AppCategoryPicker';
import AppImageInput from "../components/AppImageInput";

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
  imageUrl: yup.string().required().label("Product Image")
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
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: "",
          }}
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
              <AppImageInput/>
              <ErrorMessages error={errors.imageUrl} visible={touched.imageUrl} />

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
                keyboardType={"numeric"}
              />
              <ErrorMessages error={errors.price} visible={touched.price} />

              <AppCategoryPicker
                selected={category}
                onSelect={(item) => setCategory(item)}
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