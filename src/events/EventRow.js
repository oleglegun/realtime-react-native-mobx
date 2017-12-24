/* @flow */
import * as React from 'react'
import { Text, StyleSheet } from 'react-native'
import Row from '../common/Row'
import style from '../styles'

type Props = { event: { title: string, where: string, when: string } }

type State = {}

class EventRow extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const { event } = this.props
        return (
            <Row>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{event.where}</Text>
                <Text>{event.when}</Text>
            </Row>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontFamily: style.fontFamilyTitle,
        fontSize: 20,
    },
})

export default EventRow
