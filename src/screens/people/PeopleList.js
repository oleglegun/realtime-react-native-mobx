/* @flow */
import * as React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import type { PeopleStore, INavigation } from '../../types'
import { inject, observer } from 'mobx-react/index'
import PeopleList from '../../people/PeopleList'

type Props = {
    // from @inject
    people: PeopleStore,

    // from context
    navigation: INavigation,
}

@inject('people')
@observer
class PeopleListScreen extends React.Component<Props> {
    static navigationOptions = {
        title: 'People',
    }

    componentDidMount() {
        const { people } = this.props
        if (!people.loaded && !people.loading) people.fetchAll()
    }

    render() {
        const { people } = this.props
        if (people.loading) return this.getLoader()
        //$FlowFixMe
        return <PeopleList onPersonPress={this.handlePersonPress} />
    }

    getLoader() {
        return (
            <View>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    handlePersonPress = (uid: number) => {
        console.log('---', 'personPress', uid)
        this.props.navigation.navigate('Person', { uid })
    }
}

const styles = StyleSheet.create({})

export default PeopleListScreen