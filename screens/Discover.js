import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SongCard, Loader, Error } from "../components";
import { genres } from "../assets/constants";

const Discover = () => {
  //   console.log(genres);
  return (
    <View style={{ paddingTop: 40, paddingHorizontal: 10 }}>
      <Text style={{ color: "white" }}>Discover</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: "row" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, i) => (
            <SongCard key={song.key} song={song} i={i} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({});
