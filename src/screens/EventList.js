/* @flow */
import * as React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import EventList from '../events/EventList'
import { Ionicons } from '@expo/vector-icons'
import { inject, observer } from 'mobx-react'
import type { Event } from '../types'

type Props = {
    events: { entities: Array<Event> },
}

@inject('events')
@observer
class EventListScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'Events',
    }

    render() {
        const { events: { entities } } = this.props

        return (
            <View style={styles.container}>
                {!entities ? (
                    <ActivityIndicator
                        style={styles.activityIndicator}
                        size={'large'}
                    />
                ) : (
                    <EventList events={entities} />
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default EventListScreen
