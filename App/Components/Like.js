import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Like() {
  const Liked = true

  return (
    <View style={styles.container}>
      {Liked === true ? (
        <View style={styles.backgroundLikedFalse}>
          <Image
            style={styles.logo}
            source={require(`../Img/HeartLight.png`)}
          />
        </View>
      ) : (
        <View style={styles.backgroundLiked}>
          <Image
            style={styles.logo}
            source={require(`../Img/Heart.png`)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    borderRadius: 11,
    marginRight: 4,
    marginBottom: 4,
  },
  backgroundLikedFalse: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba( 230, 230, 230, 0.3)',
  },
  backgroundLiked: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'rgba( 230, 230, 230, 0.3)',
  },
});
