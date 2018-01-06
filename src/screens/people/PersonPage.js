/* @flow */
import * as React from 'react'
import { View, StyleSheet, Text, Button, Image } from 'react-native'
import { observer, inject } from 'mobx-react'
import type { EntitiesStore, INavigation } from '../../types'

type Props = {
    // from @inject
    people: EntitiesStore,

    navigation: INavigation,
}

type State = {}

@inject('people')
@observer
class PersonPageScreen extends React.Component<Props, State> {
    state = {}

    render() {
        const { people, navigation } = this.props
        const personUID = navigation.state.params.uid

        const person = people.entities[personUID]
        return (
            <View style={styles.container}>
                {person.avatar ? this.getAvatar(person.avatar) : null}
                <Text>{person.firstName}</Text>
                <Button title={'Take Avatar'} onPress={this.handleTakeAvatar} />
            </View>
        )
    }

    handleTakeAvatar = () => {
        console.log('---', 'Take avatar')

        this.props.navigation.navigate('Camera', {
            uid: this.props.navigation.state.params.uid,
        })
    }

    getAvatar = (uri: string) => {
        console.log('---', uri)
        return <Image source={{ uri }} style={styles.avatar} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        flex: 1,
        width: 300,
    },
})

export default PersonPageScreen
