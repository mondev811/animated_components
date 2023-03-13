import { StyleSheet, Text, View, FlatList, FlatListProps, TouchableOpacity } from 'react-native'
import React from 'react'
import {Slide, SLIDE_HEIGHT} from './Slide';

export const List = () => {
    const [listRef, setListRef] = React.useState<React.LegacyRef<FlatList<{
        label: string;
        right: boolean;
    }>> | undefined>()

    const listRef2 = React.useRef<React.LegacyRef<FlatList<{
        label: string;
        right: boolean;
    }>> | undefined>(null);
    const [currentItem, setCurrentItem] = React.useState(0);

    const scrollToItem = ()=>{
        const newItemIndex = currentItem < DATA.length-1 ? currentItem + 1 : 0;
        listRef?.scrollToIndex({
            animated: true,
            index: newItemIndex
        })
        setCurrentItem(newItemIndex);
    }
    const DATA = [
        {
            label: "Relaxed",
            right: false
        },
        {
            label: "Playful",
            right: true
        },
        {
            label: "Excentric",
            right: false
        },
        {
            label: "Funky",
            right: true
        },]
    
  return (
    <View style={styles.container}>
    <View style={styles.slider}>
    <FlatList 
    data={DATA}
    renderItem={({item})=><Slide label={item.label} right={item.right} />}
    horizontal={true}
    ref={ref=>setListRef(ref)}
    />

      </View>
      <View style={styles.footer}>
        <View style={styles.footerUnderlay} />
        <View style={styles.footerOverlay} />
      </View>
      <TouchableOpacity
      style={styles.button}
      onPress={scrollToItem}
      >
        <Text style={styles.buttonText}>Press here!</Text></TouchableOpacity>
    </View>
  )
}


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
      button: {width: 200, 
        height: 60, 
        backgroundColor: 'green',
        position:'absolute',
        bottom: 250,
        left: 60,
        borderRadius: 50,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20
    }
})