/* @flow */
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import PeopleList from '../people/PeopleList'

type Props = {}

type State = {}

class PeopleListScreen extends React.Component<Props, State> {
    static defaultProps = {}

    navigationOptions = {
        title: 'People',
    }

    state = {}

    render() {
        return (
            <View>
                <PeopleList />
            </View>
        )
    }
}

const styles = StyleSheet.create({})

export default PeopleListScreen
