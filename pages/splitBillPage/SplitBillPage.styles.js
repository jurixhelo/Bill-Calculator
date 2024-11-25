import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    width: "80%",
    borderRadius: 4,
  },
  slider: {
    width: "80%",
    height: 40,
    marginTop: 16,
  },
  result: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  picker: {
    height: 40,
    marginBottom: 16,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "transparent",
  },
});
export default styles;
