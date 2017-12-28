/* @flow */
import * as React from 'react'
import {
    View,
    StyleSheet,
    SectionList,
    Text,
    TouchableOpacity,
} from 'react-native'
import type { Person } from '../types'
import PersonCard from '../people/PersonCard'
import { observer, inject } from 'mobx-react'

type Props = {
    onPersonPress: (uid: number) => void,
    // from inject
    people: { sections: $ReadOnlyArray<any> },
}

@inject('people')
@observer
class PeopleList extends React.Component<Props> {
    render() {
        const { onPersonPress, people } = this.props
        return (
            <SectionList
                sections={people.sections}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>{section.title}</Text>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={onPersonPress.bind(null, item.key)}
                    >
                        <PersonCard person={item.person} />
                    </TouchableOpacity>
                )}
            />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F0F0',
        height: 40,
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.3,
        elevation: 3,
    },
})

export default PeopleList
