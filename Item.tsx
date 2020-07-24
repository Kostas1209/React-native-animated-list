import React from 'react'
import { View, Dimensions, Image, Text, Animated, StyleSheet, ViewStyle } from 'react-native'
import { Colors } from 'react-native-paper';


const { width } = Dimensions.get('window')

export interface ItemProps
{
    delay: number
    speed: number
    mode : "fade" | "move-end" | "move-start",
    style: ViewStyle
}

export class Item extends React.Component<ItemProps> {
    state={
        position : this.props.mode === "move-start" ? new Animated.Value(-500) : new Animated.Value(width),
        opacity: new Animated.Value(0)
    }

    componentDidMount()
    {
        switch(this.props.mode)
        {
            case "move-end":
            {
                setTimeout(()=>{
                    Animated.timing(
                        this.state.position,
                        {
                            toValue: 0,
                            duration: this.props.speed,
                            useNativeDriver: true
                        }
                    ).start()}, this.props.delay)
            } 
            case "fade":
            {
                setTimeout(()=>{
                    Animated.timing(
                        this.state.opacity,
                        {
                            toValue: 1,
                            duration: this.props.speed,
                            useNativeDriver: true
                        }
                    ).start()}, this.props.delay)
            }
            case "move-start":
            {
                setTimeout(()=>{
                    Animated.timing(
                        this.state.position,
                        {
                            toValue: 0,
                            duration: this.props.speed,
                            useNativeDriver: true
                        }
                    ).start()}, this.props.delay)
            } 
        }
    }

  render() {
    return (
      <Animated.View style={[
          this.props.mode==="move-end" ? {transform: [{translateX : this.state.position}]} : "none",
          this.props.mode==="fade" ? {opacity: this.state.opacity} : "none",
          this.props.mode==="move-start" ? {transform: [{translateX : this.state.position}]} : "none",
          this.props.style,
        ]}>
            {
                this.props.children
            }
      </Animated.View>
    );
  }
}
