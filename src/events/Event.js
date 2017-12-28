/* @flow */
import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import Style from '../../src/styles'
import type { EventType } from '../types'

type Props = {
    onDeleteEvent: (uid: number) => void,
    event: EventType,
}

class Event extends React.Component<Props> {
    render() {
        const { event } = this.props
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/images/event.jpg')}
                    style={styles.image}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>{event.title}</Text>
                    <Text style={styles.whenText}>{event.when}</Text>
                    <Text style={styles.whereText}>{event.where}</Text>
                </View>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={this.props.onDeleteEvent}
                    >
                        <Text style={styles.deleteButtonText}>DELETE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        // backgroundColor: 'black',
    },
    image: {
        width: '100%',
        height: 300,
    },
    infoContainer: {
        height: 200,
    },
    titleText: {
        fontSize: 30,
        fontFamily: Style.fontFamilyTitle,
        textAlign: 'center',
    },
    whenText: { color: Style.colors.gray70, textAlign: 'center' },
    whereText: {
        textAlign: 'center',
    },

    actionsContainer: {
        flex: 1,
    },
    deleteButton: {
        // height: 50,
        backgroundColor: Style.colors.red,
        borderRadius: 25,
        padding: 10,
        margin: 30,
    },

    deleteButtonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
})

export default Event
