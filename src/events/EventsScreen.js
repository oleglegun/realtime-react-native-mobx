/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

type Props = {
    event: {},
}

type State = {}

class EventsScreen extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const { event } = this.props
        return (
            <View>
                <ImageBackground
                    source={{ uri: 'http://lorempixel.com/400/200/technics/' }}
                    style={styles.image}
                />
                <Text>{event.title}</Text>
                <Text>{event.where}</Text>
                <Text>{event.url}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 400,
        height: 200,
    },

})

export default EventsScreen
