import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView from 'react-native-maps'
import Map from '../components/Map'

const MapScreen = () => {
  return (
    <View>
      <View
        style={tw`h-1/2`}
      >
        <Map>

        </Map>
      </View>

      <View
        style={tw`h-1/2`}
      >

      </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})