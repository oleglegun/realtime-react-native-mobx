/* @flow */
import * as React from 'react'
import { View, StyleSheet } from 'react-native'

type Props = {
    children: React.Node
}
type State = {}

class Row extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        return <View style={styles.container}>{this.props.children}</View>
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#eee',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
})

export default Row
