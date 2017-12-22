/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SignIn from './auth/SignIn'
import { eventList } from './fixtures'
import EventsScreen from './events/EventsScreen'
import EventList from './events/EventList'

class Root extends React.Component {
    static defaultProps = {}

    render() {
        return <EventList events={eventList} />
    }
}

const styles = StyleSheet.create({})

export default Root
