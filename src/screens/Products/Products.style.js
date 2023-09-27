import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  listContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  weapperStyle: {
    justifyContent: "space-between",
  },
  productContainer: {
    width: "30%",
    backgroundColor: "black",
    marginBottom: 20,
    alignItems: "flex-start",
    paddingVertical: 15,

    paddingHorizontal: 10,

    gap: 10,
  },
  image: {
    alignSelf: "center",
    height: 100,
    width: 80,
    borderColor:  colors.green,
    borderWidth:3
  },
  title: {
   
    fontFamily: "k1",
   color: colors.green,
  },
  price: {
    fontSize: 20,
    fontVariant: "",
  },
});
