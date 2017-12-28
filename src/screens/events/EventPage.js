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
import { inject, observer } from 'mobx-react'
import Style from '../../styles'
import Event from '../../events/Event'

type Props = {
    event: { title: string, when: string, where: string },
    uid: number,
}

@inject('events')
@observer
class EventPage extends React.Component<Props> {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.uid,
    })

    render() {
        const eventUID = this.props.navigation.state.params.uid
        const event = this.props.events.entities[eventUID]
        // const { event } = this.props
        return <Event event={event} onDeleteEvent={this.handleDelete} />
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

const styles = StyleSheet.create({})

export default EventPage
