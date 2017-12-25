/* @flow */
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import SignIn from '../auth/SignIn'
// $FlowFixMe
import type { NavigationScreenProp, NavigationState } from 'react-navigation'

type Props = {
    navigation: NavigationScreenProp<NavigationState, *>,
}

type State = {}

class AuthScreen extends React.Component<Props, State> {
    static defaultProps = {}

    static navigationOptions = {
        title: 'Sign In',
    }

    state = {}

    render() {
        return (
            <View style={styles.container}>
                <SignIn />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AuthScreen
