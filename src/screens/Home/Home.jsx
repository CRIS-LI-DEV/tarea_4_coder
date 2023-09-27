import React from "react";
import { FlatList, SafeAreaView, StatusBar, View } from "react-native";
import { CategoryItem } from "./components";
import { Header } from "../../components";
import dataCategories from "../../data/dataCategories";
import styles from "./Home.style";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} barStyle={"light-content"} />

      <Header title={"Categories"} />

      <View style={styles.listContainer}>
        <FlatList
          data={dataCategories}
          keyExtractor={(category) => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item.title} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
