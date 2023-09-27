import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    aspectRatio: 1,
    width: "80%",

    resizeMode: "contain",
    borderWidth: 2,
    borderColor: colors.green, // Color del borde
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "k1",
    color: colors.green, // Color del texto del título
  },
  infoContainer: {
    marginBottom: 20,
    fontFamily: "k1",
    color: colors.green,
  },
  infoItem: {
    flexDirection: "row",
    marginBottom: 10,
    fontFamily: "k1",
    color: colors.green,
  },
  infoLabel: {
    flex: 1,
    fontWeight: "bold",
    marginRight: 10,
    fontFamily: "k1",
    color: colors.green, // Color del texto de etiquetas de información
  },
  infoText: {
    flex: 2,
    fontSize: 16,
    fontFamily: "k1",
    color: colors.green, // Color del texto de información
  },
});
