import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Screen from './Screen'

class TestScreen extends Component {
  static navigationOptions = {
    title: 'Test'
  }
  render() {
    return (
      <Screen>
        <Text>
          TestScreen
        </Text>
      </Screen>
    )
  }
}

export default TestScreen