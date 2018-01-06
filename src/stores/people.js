import EntitiesStore, { fetchAllHelper } from './EntitiesStore'
import { action, computed } from 'mobx'
import groupBy from 'lodash/groupBy'
import firebase from 'firebase'

class PeopleStore extends EntitiesStore {
    @computed
    get sections() {
        const grouped = groupBy(this.list, person => person.firstName.charAt(0))

        return Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} people`,
            data: list.map(person => ({ key: person.uid, person })),
        }))
    }

    @action fetchAll = fetchAllHelper('people')

    @action
    updatePerson = (uid: string, payload: {}) => {
        firebase
            .database()
            .ref(`people/${uid}`)
            .update(payload)
            .then(() => {
                console.log('---', 'uploaded!')
                this.fetchAll()
                this.stores.navigation.reset('Lists')
            })
    }
}

export default PeopleStore
