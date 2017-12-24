/* @flow */
import * as React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableHighlight,
    Alert,
    StatusBar,
} from 'react-native'
import Style from '../styles'

type Props = {
    event: { title: string, when: string, where: string },
}

type State = {}

class EventsScreen extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const { event } = this.props
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
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
                    <TouchableHighlight
                        style={styles.deleteButton}
                        onPress={this.handleDelete}
                    >
                        <Text style={styles.deleteButtonText}>DELETE</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    handleDelete = () => {
        Alert.alert(
            'Delete Event?',
            'This action cannot be undone.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
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

export default EventsScreen
