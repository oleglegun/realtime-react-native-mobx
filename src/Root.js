/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignIn from './auth/SignIn'
import { eventList } from './fixtures'
import EventsScreen from './events/EventsScreen'

class Root extends React.Component {
    static defaultProps = {}

    render() {
        return <EventsScreen event={eventList[0]} />
    }
}

const styles = StyleSheet.create({})

export default Root
