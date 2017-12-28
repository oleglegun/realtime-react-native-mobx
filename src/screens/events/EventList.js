/* @flow */
import * as React from 'react'
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    StatusBar,
} from 'react-native'
import { inject, observer } from 'mobx-react'
import EventList from '../../events/EventList'
import type { Event } from '../../types'
import { toJS } from 'mobx'

type Props = {
    // from @inject
    events: {
        // entities: Array<Event>,
        fetchAll: () => void,
        loading: boolean,
        loaded: boolean,
        list: Array<Event>,
    },
}

type State = {}

@inject('events')
@observer
class EventListScreen extends React.Component<Props, State> {
    static navigationOptions = {
        title: 'Events',
    }

    componentDidMount() {
        this.props.events.fetchAll()
    }

    render() {
        const { events } = this.props
        if (events.loading) {
            return this.getLoader()
        }

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="dark-content" />
                <EventList
                    onEventPress={this.handleEventPress}
                    events={events.list}
                />
            </View>
        )
    }

    getLoader() {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    handleEventPress = (uid: number) => {
        console.log('---', 'pressed uid', uid)
        this.props.navigation.navigate('Event', { uid })
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
