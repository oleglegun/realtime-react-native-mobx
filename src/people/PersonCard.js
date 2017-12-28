/* @flow */
import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Card from '../common/Card'
import type { Person } from '../types'

type Props = {
    person: Person,
}

class PersonCard extends React.Component<Props> {
    render() {
        const { email, firstName, lastName } = this.props.person
        return (
            <Card>
                <View>
                    <Text>{email}</Text>
                    <Text>{firstName}</Text>
                    <Text>{lastName}</Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({})

export default PersonCard
