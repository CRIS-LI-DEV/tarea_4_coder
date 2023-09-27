import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  input: {
    width: "80%",
    padding: 10,
    fontSize: 20,
    borderWidth: 3,
    backgroundColor: "black",
    borderColor: "green",
    backgroundColor: colors.grey,
    fontFamily: "k1",
  },
});
