/* @flow */
import * as React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'
import EventCard from './EventCard'
import Styles from '../styles'
import EventRow from './EventRow'
import type { Event } from '../types'

type Section = {
    data: $ReadOnlyArray<Event>,
    count: number,
    title: string,
}

type Props = {
    events: Array<Event>,
}

type State = {}

const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
)

class EventList extends React.Component<Props, State> {
    static defaultProps = {}

    state = {}

    render() {
        const sortedEvents = this.props.events.sort((a, b) => {
            if (a.title < b.title) {
                return -1
            } else if (a.title > b.title) {
                return 1
            }

            return 0
        })

        const eventsCount = sortedEvents.length

        let section = {}
        const sections = []

        sortedEvents.forEach((event, index, arr) => {
            if (!section.data) {
                // debugger
                // Prev section is finished - start new section
                section.data = [event]
                section.title = event.title[0]
            } else if (event.title[0] === section.title[0]) {
                // check if current event belongs to section
                // add event
                section.data.push(event)
            }

            // continue if array is not over
            if (index < eventsCount - 1) {
                // check if section is over (if first latter is different)
                if (arr[index + 1].title[0] !== section.title[0]) {
                    // close section
                    sections.push({ ...section, count: section.data.length })
                    section = {}
                }
            }
        })

        return (
            <SectionList
                style={styles.scrollView}
                renderItem={this.renderItem}
                renderSectionHeader={this.renderSectionHeader}
                sections={sections}
                keyExtractor={item => item.uid}
            />
        )
    }

    renderItem({ item }: { item: Event }) {
        return <EventRow event={item} />
    }
    // $FlowFixMe
    renderSectionHeader({ section }) {
        return (
            <SectionHeader
                key={section.title}
                title={`${section.title} – ${section.count}`}
            />
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    sectionHeaderContainer: {
        backgroundColor: '#eee',
    },
    sectionHeaderText: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        fontSize: 20,
        fontFamily: Styles.fontFamilyTitle,
    },
})

export default EventList
