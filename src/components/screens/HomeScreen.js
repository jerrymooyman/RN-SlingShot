import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import Screen from './Screen'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Screen>
        <Text>
          HomeScreen
        </Text>
      </Screen>
    )
  }
}

export default HomeScreen