/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../common/Card'

type Props = {}

type State = {}

class EventCard extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const { event } = this.props
        return (
            <Card>
                <Text>{event.title}</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({})

export default EventCard
