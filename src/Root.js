/* @flow */
import * as React from 'react'
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import SignIn from './auth/SignIn'
import { eventList } from './fixtures'
import EventsScreen from './events/EventsScreen'
import EventList from './events/EventList'

class Root extends React.Component {
    static defaultProps = {}

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Image
                    style={styles.logo}
                    source={require('../assets/images/city.jpg')}
                    resizeMode={Image.resizeMode.cover}
                    blurRadius={5}
                />
                <EventList events={eventList} />
            </View>
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
})

export default Root
