import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class OctaveUp extends Component {

  onPress() {

  }


  render() {
    return (
      <View>
        <Button
          onPress={this.onPress}
          title="Octave Up"
          color="#841584"
        />
      </View>
    );
  }

}

export default OctaveUp;
