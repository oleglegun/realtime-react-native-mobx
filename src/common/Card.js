/* @flow */
import * as React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
    children: React.Node
}

type State = {}

class Card extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        return <View style={styles.container}>{this.props.children}</View>
    }
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#ccc',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,

        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})

export default Card
