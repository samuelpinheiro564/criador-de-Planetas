import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 30,
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    color: "#B0C4DE",
    textAlign: "center",
    lineHeight: 24,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgoundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
});

export default styles;
