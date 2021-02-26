import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [randomColor, setRandomColor] = useState("");
 
  const backgroundColor = () => {
    let color = "rgb(" + Math.floor(Math.random() * 256)+
    "," + Math.floor(Math.random() * 256)+
    "," + Math.floor(Math.random() * 256)+
    ")";
    setRandomColor(color);
  };
  const resetBackgroundColor = () =>{
    let bgColor = "rgb(0,0,0)"
    setRandomColor(bgColor);
  }
  return (
    <>
            <StatusBar style="auto" />
      <View style={[styles.container, { backgroundColor: randomColor }]}>
        <TouchableOpacity onPress={backgroundColor}>
          <Text style={styles.textContainer}>Tap me</Text>
        </TouchableOpacity>
        <View style={{backgroundColor:randomColor}}>
          <TouchableOpacity onPress={resetBackgroundColor}>
            <Text style={[styles.textContainer,{backgroundColor:"#db1860"},{marginTop:10}]}> Reset</Text>
          </TouchableOpacity>
         </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: "#080952",
    color: "#ffffff",
    textTransform: "uppercase",
    borderRadius: 15,
  },
});
