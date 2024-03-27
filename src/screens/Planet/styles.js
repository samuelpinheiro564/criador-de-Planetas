import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  userInput: {
    backgroundColor: "#222",
    color: "#fff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6a0dad",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
    textTransform: "uppercase",
    letterSpacing: 2,
    shadowColor: "#6a0dad",
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  planetName: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingBottom: 10,
  },
  noPlanets: {
    color: "#fff",
    fontStyle: "italic",
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
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
