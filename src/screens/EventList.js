/* @flow */
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import EventList from '../events/EventList'
import { eventList } from './../fixtures'

type Props = {}

type State = {}

class EventListScreen extends React.Component<Props, State> {
    static navigationOptions = {
        title: 'Event List',
    }

    state = {}

    render() {
        return (
            <View style={styles.container}>
                <EventList events={eventList} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
})

export default EventListScreen
