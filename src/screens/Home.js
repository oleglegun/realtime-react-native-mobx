/* @flow */
import * as React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
// $FlowFixMe react-navigation not found bug
import { TabNavigator } from 'react-navigation'
import EventList from './EventList'
import PeopleList from './PeopleList'

type Props = {}

type State = {}

const HomeScreen = TabNavigator(
    {
        Events: {
            screen: EventList,
            path: 'events',
        },
        People: {
            screen: PeopleList,
            path: 'people',
        },
    },
    {
        tabBarOptions: {
            // activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
)

const styles = StyleSheet.create({})

export default HomeScreen
