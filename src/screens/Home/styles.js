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
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#6a0dad",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
    shadowColor: "#6a0dad",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
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
