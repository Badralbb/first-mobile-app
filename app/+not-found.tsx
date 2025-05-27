import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

const NotFound = () => {
  return (
    <View>
      <Link style={styles.text} href={"/"}>
        go back home
      </Link>
    </View>
  );
};
export default NotFound;

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
