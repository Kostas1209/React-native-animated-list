import React, { useState, Component, ReactElement } from 'react'
import { View, Dimensions, Animated, Image, Text, ViewStyle } from 'react-native'
import {data} from './common';
import { Item, ItemProps } from './Item';

const { width } = Dimensions.get('window')

interface AnimatedListProps extends ItemProps
{
    data: Array<Object>,
    dataHandler: (element : Object) => ReactElement
    style: ViewStyle,
    itemStyles: ViewStyle
}

export class AnimatedList extends React.Component<AnimatedListProps> {
  render() {
    return (
      <View style={this.props.style}>
          {
            this.props.data.map((element, index)=>{
              return (<Item style={this.props.itemStyles} mode={this.props.mode} key={index} speed={this.props.speed} delay={index * this.props.delay}>
                          {
                              1===1 ? this.props.dataHandler(element) : "none"
                          }
                      </Item>);
            })
          }
      </View>
    );
  }
}