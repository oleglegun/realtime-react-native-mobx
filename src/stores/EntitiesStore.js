/* @flow */
import BaseStore from './BaseStore'
import { observable, computed, action, toJS } from 'mobx'
import firebase from 'firebase'
import { fbToEntities } from './utils'

class EntitiesStore extends BaseStore {
    // Object is more convenient than array
    @observable entities = {}

    @observable loading = false
    @observable loaded = false

    @computed
    get list(): Array<mixed> {
        return Object.values(this.entities)
    }

    @computed
    get size(): number {
        return Object.keys(this.entities).length
    }
}

export function fetchAllHelper(refName: string) {
    console.log('---', 'fetchAll', refName)

    return function() {
        this.loading = true
        console.log('---', 'fetchAll - start', refName)

        firebase
            .database()
            .ref(refName)
            .limitToFirst(50)
            .once(
                'value',
                action(data => {
                    this.entities = fbToEntities(data.val())
                    this.loading = false
                    this.loaded = true
                    console.log('---', 'fetchAll - end', refName)
                })
            )
    }
}

export default EntitiesStore
