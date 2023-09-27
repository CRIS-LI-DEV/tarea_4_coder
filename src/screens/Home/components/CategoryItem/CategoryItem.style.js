import { StyleSheet } from "react-native";
import { colors } from "../../../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    marginVertical: 15,
    height: 50,

    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.green,
    borderWidth: 3,
    backgroundColor: "black",
    shadowColor: "lightgreen", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5, // Opacidad de la sombra
    shadowRadius: 4, // Radio de la sombra
    elevation: 5, // Elevación para Android
  },
  contentContainer: {},
  text: {
    fontFamily: "k1",
    fontSize: 18,
    color: colors.green,
  },
});
