import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const Calculator = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentNumber, setCurrentNumber] = useState("");
  const [lastNumber, setLastNumber] = useState("");

  const bgColorFunction = darkMode ? "#14183f" : "#ededed";
  const bgColorNumber = darkMode ? "#303946" : "#fff";
  const bgColorResult = darkMode ? "#282f3b" : "#f5f5f5";
  const bgColorThemeButton = darkMode ? "#7b80a4" : "#e5e5e5";
  const textColorHistory = darkMode ? "#858b87" : "#7c7c7c";
  const colorIcon = darkMode ? "white" : "black";

  const buttonsLeft = [
    ["C", "DEL"],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, "."],
  ];
  const buttonsRight = ["/", "*", "-", "+", "="];

  const calculator = () => {
    let lastChar = currentNumber[currentNumber.length - 1];
    if (["*", "/", ".", "+", "-"].includes(lastChar)) return;
    setLastNumber(currentNumber);
    const result = eval(currentNumber).toString();
    setCurrentNumber(result);
  };

  const handleInput = (buttonPress) => {
    switch (buttonPress) {
      case "+":
      case "-":
      case "*":
      case "/":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case "DEL":
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case "C":
        Vibration.vibrate(35);
        setCurrentNumber("");
        setLastNumber("");
        break;
      case "=":
        Vibration.vibrate(35);
        setLastNumber(currentNumber + "=");
        calculator();
        break;
      default:
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  return (
    <View style={myStyles.container}>
      <View
        style={[myStyles.containerResult, { backgroundColor: bgColorResult }]}
      >
        <TouchableOpacity
          style={[
            myStyles.themeButton,
            { backgroundColor: bgColorThemeButton },
          ]}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo
            name={darkMode ? "light-up" : "moon"}
            size={40}
            color={colorIcon}
          />
        </TouchableOpacity>
        <Text style={[myStyles.historyText, { color: textColorHistory }]}>
          {lastNumber}
        </Text>
        <Text style={myStyles.resultText}>{currentNumber}</Text>
      </View>

      <View style={myStyles.containerButton}>
        <View style={myStyles.containerButtonLeft}>
          {buttonsLeft.map((row, index) => (
            <View
              key={index}
              style={myStyles.containerRow}
              backgroundColor={index === 0 ? bgColorFunction : bgColorNumber}
            >
              {row.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={myStyles.button}
                  onPress={() => handleInput(item)}
                >
                  <Text style={myStyles.buttonText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={myStyles.containerButtonRight}>
          {buttonsRight.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={myStyles.button}
              onPress={() => handleInput(item)}
            >
              <Text style={[myStyles.buttonText, { color: "#fff" }]}>
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const myStyles = StyleSheet.create({
  container: { flex: 1 },
  containerResult: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  containerButton: {
    flex: 2,
    flexDirection: "row",
  },
  containerButtonLeft: {
    flex: 3,
  },
  containerButtonRight: {
    flex: 1,
    backgroundColor: "#00b0d6",
  },
  themeButton: {
    marginTop: 50,
    marginLeft: 20,
    borderRadius: 90,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  containerRow: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  resultText: {
    color: "#00b0d6",
    fontSize: 35,
    margin: 15,
  },
  historyText: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 10,
  },
});

export default Calculator;
