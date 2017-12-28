import EntitiesStore, { fetchAllHelper } from './EntitiesStore'
import { action, computed } from 'mobx'
import groupBy from 'lodash/groupBy'

class PeopleStore extends EntitiesStore {
    @computed
    get sections() {
        const grouped = groupBy(this.list, person => person.firstName.charAt(0))

        console.log('---', grouped)

        return Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} people`,
            data: list.map(person => ({ key: person.uid, person })),
        }))
    }

    @action fetchAll = fetchAllHelper('people')
}

export default PeopleStore
