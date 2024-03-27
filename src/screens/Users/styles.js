import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "#fff",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  planet: {
    backgroundColor: "rgba(17, 17, 17, 0.8)",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  planetName: {
    fontSize: 24,
    color: "#FFD700",
    marginBottom: 10,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  planetData: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  planetCor1: {
    color: "#FFD700",
    marginBottom: 5,
  },
  planetCor2: {
    color: "#FF69B4",
    marginBottom: 5,
  },
  planetPopulacao: {
    color: "#00FFFF",
    marginBottom: 5,
  },
  planetNatural: {
    color: "#ADFF2F",
    marginBottom: 5,
  },
  planetHumans: {
    color: "#FFA500",
    marginBottom: 5,
  },
  planetLocalizacao: {
    color: "#9370DB",
    marginBottom: 5,
  },
  planetComunicacao: {
    color: "#FF6347",
    marginBottom: 5,
  },
  planetGovernante: {
    color: "#00CED1",
    marginBottom: 5,
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  stars: {
    width: "100%",
    height: "100%",
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
