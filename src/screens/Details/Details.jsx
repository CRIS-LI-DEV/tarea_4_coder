import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./Details.style";

const Details = ({ route }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: product.image }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>GÉNERO:</Text>
          <Text style={styles.infoText}>{product.gender}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>ORIGEN:</Text>
          <Text style={styles.infoText}>{product.origin.title}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>CATEGORÍA:</Text>
          <Text style={styles.infoText}>{product.category}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
