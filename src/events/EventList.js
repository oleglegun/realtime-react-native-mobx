/* @flow */
import * as React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import EventCard from './EventCard'

type Props = {}

type State = {}

class EventList extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        return (
            <View>
                <ScrollView>
                    {this.props.events.map(event => (
                        <EventCard key={event.uid} event={event} />
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default EventList
