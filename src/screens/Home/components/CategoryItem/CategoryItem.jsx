import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import React from "react";

import { setCategorySelected } from "../../../../features/shop/shopSlice";
import styles from "./CategoryItem.style";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={() => {
        console.log(category);
        dispatch(setCategorySelected(category));
        navigation.navigate("Products", { category });
      }}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryItem;
