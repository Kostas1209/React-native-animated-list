import 'react-native-gesture-handler';
import React, { useState, Component } from 'react'
import { View, Dimensions, Animated, Image, Text } from 'react-native'
import {data} from './common';
import { Item } from './Item';
import { AnimatedList } from './AnimatedList';
import { Colors } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window')



class App extends React.Component {

  renderItem(element: {title: string, article: string})
  {
    return(
      <View>
        <Text>{element.title}</Text>
        <Text>{element.article}</Text>
      </View>
    )
  }

  render() {
    return (
      <View  style={{width: "100%", height: "100%"}}>
        <ScrollView  style={{width: "100%", height: "100%"}}>
          <AnimatedList 
            style={{width: "100%", height: "100%", flexDirection: "column", alignItems: "center"}}
            mode="move-end"
            speed={1000}
            delay={200}
            itemStyles={{marginTop: 20, width: "80%", borderRadius: 10, borderWidth: 1, borderColor: Colors.black,backgroundColor: Colors.amber500}}
            data={data}
            dataHandler={this.renderItem}
          />
        </ScrollView>
      </View>
    );
  }
}

export default App