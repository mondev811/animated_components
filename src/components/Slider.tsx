import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Slide, SLIDE_HEIGHT} from './Slide';

const {width, height} = Dimensions.get('window');

export const Slider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.footerUnderlay} />
        <View style={styles.footerOverlay} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerUnderlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
  },
  footerOverlay: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
  },
});
