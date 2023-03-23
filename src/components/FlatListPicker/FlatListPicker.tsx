import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const ICON_SIZE = 42;
const ITEM_HEIGHT = ICON_SIZE * 2;
const colors = {
  yellow: '#FFE8A3',
  dark: '#2D2D2D',
};

const {width, height} = Dimensions.get('window');

const Icon = React.memo((props: {icon: string; color: string}) => {
  const {icon, color} = props;
  return <SimpleLineIcons name={icon} color={color} size={ICON_SIZE} />;
});

const Item = React.memo(
  (props: {icon: string; color: string; name: string; showText: boolean}) => {
    const {icon, color, name, showText} = props;
    return (
      <View style={styles.itemWrapper}>
        {showText ? (
          <Text style={[styles.itemText, {color}]}>{name}</Text>
        ) : (
          <View />
        )}
      </View>
    );
  },
);
export const FlatListPicker = () => {
  return (
    <View>
      <SimpleLineIcons name="user-female" color="red" size={42} />
      <Text>FlatListPicker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {},
  itemText: {},
});
