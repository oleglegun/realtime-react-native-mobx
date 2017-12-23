/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../common/Card'
import style from '../styles'

type Props = {}

type State = {}

class EventCard extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const { event } = this.props
        return (
            <Card>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{event.where}</Text>
                <Text>{event.when}</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: style.fontFamilyTitle,
        fontSize: 20,
    },
})

export default EventCard
