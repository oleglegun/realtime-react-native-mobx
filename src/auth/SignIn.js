/* @flow */
import * as React from 'react'
import {
    View,
    Button,
    TouchableOpacity,
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    ImageBackground,
} from 'react-native'

type Props = {}

type State = { email: string, password: string }

class SignIn extends React.Component<Props, State> {
    static defaultProps = {}

    state = {
        email: '',
        password: '',
    }

    render() {
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={0}
                behavior="position"
                style={styles.container}
            >
                <View style={styles.box}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>SIGN IN</Text>
                    </View>
                    <View>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputIcon} />
                            <TextInput
                                style={styles.input}
                                value={this.state.email}
                                onChangeText={this.changeEmail}
                                keyboardType="email-address"
                                placeholder="Email"
                                placeholderTextColor="white"
                                autoCapitalize="none"
                            />
                        </View>
                        <View style={styles.textInputContainer}>
                            <View style={styles.textInputIcon} />
                            <TextInput
                                style={styles.input}
                                value={this.state.password}
                                onChangeText={this.changePassword}
                                secureTextEntry
                                keyboardType="phone-pad"
                                placeholder="Password"
                                placeholderTextColor="white"
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.handleButtonClick}
                            color="#fff"
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.terms}>
                        <Text style={styles.termsText}>Terms & Conditions</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }

    handleButtonClick = () => {}
    changeEmail = email => this.setState({ email })
    changePassword = password => this.setState({ password })
}

const constants = {
    fontFamily: 'Avenir-Black',
    orange: '#ff762c',
    green: '#0ba62b',
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#98514c',
        paddingTop: 30,
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
    },
    box: {},
    header: {
        fontSize: 20,
    },

    headerContainer: {
        flexBasis: 200,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        fontFamily: constants.fontFamily,
    },
    textInputContainer: {
        flexDirection: 'row',
        flexBasis: 50,
        backgroundColor: '#ccc3',
        margin: 20,
        borderRadius: 25,
    },
    textInputIcon: {
        flexBasis: 50,
    },

    input: {
        flexGrow: 1,
        fontSize: 20,
        color: 'white',
        fontFamily: constants.fontFamily,
    },

    button: {
        // borderWidth: 1,
        // borderColor: '#fff',
        backgroundColor: constants.green,
        padding: 10,
        margin: 20,
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
        fontFamily: constants.fontFamily,
    },

    terms: {
        padding: 10,
    },
    termsText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: constants.fontFamily,
    },
})

export default SignIn
