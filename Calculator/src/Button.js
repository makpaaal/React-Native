import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import Style from './Styles'

export default class Button extends Component{
    render(){
        return (
            <TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        );
    }
}
