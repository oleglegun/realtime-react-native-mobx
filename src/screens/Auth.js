import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import SignIn from '../auth/SignIn'

type Props = {}

class AuthScreen extends React.Component<Props> {
    static defaultProps = {}

    static navigationOptions = {
        title: 'Sign In',
    }

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
