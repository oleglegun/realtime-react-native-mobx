/* @flow */
import * as React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    ImageBackground,
} from 'react-native'
import SignIn from './auth/SignIn'
import { eventList } from './fixtures'
import EventsScreen from './events/EventsScreen'
import EventList from './events/EventList'
import Style from './styles'

type State = {
    isSignedIn: boolean,
}

class Root extends React.Component<State> {
    static defaultProps = {}

    state = {
        isSignedIn: true,
    }

    render() {
        return this.state.isSignedIn ? (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <ImageBackground
                    style={styles.logo}
                    source={require('../assets/images/city.jpg')}
                    resizeMode={Image.resizeMode.cover}
                    blurRadius={5}
                >
                    <Text style={styles.imageText}>Events</Text>
                </ImageBackground>

                <EventList events={eventList} />
            </View>
        ) : (
            <SignIn />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    logo: {
        width: '100%',
        height: 100,
    },
    imageText: {
        marginTop: 30,
        fontFamily: Style.fontFamilyTitle,
        backgroundColor: 'transparent',
        fontSize: 35,
        textAlign: 'center',
        color: '#fff',
    },
})

export default Root
