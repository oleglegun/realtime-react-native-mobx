import BaseStore from './BaseStore'
import { observable, action, autorun } from 'mobx'
import firebase from 'firebase'
import { fbToArr } from './utils'

class PeopleStore extends BaseStore {
    @observable entities = []

    constructor(...args) {
        super(...args)

        autorun(() => {
            if (this.getStore('auth').user) {
                this.loadPeople().then(console.log)
            }
        })
    }

    async loadPeople() {
        let peopleRef = firebase.database().ref('/people')

        const entities = await peopleRef.once('value')

        this.setEntities(fbToArr(entities.val()))

        return 'people loaded!'
    }

    setEntities = (entities: []) => (this.entities = entities)
}

export default PeopleStore
