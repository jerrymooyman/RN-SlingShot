import React, { Component } from 'react'
import { StyleSheet, Platform, StatusBar } from 'react-native'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

class Screen extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { children } = this.props
    return (
      <View style={style.main}>
        {children}
      </View>
    )
  }
}

const style = StyleSheet.create({
  main: {
  }
})

export default Screen