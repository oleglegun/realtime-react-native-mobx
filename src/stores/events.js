import BaseStore from './BaseStore'
import firebase from 'firebase'
import { observable, autorun, action, computed } from 'mobx'
import { fbToArr } from './utils'

class EventsStore extends BaseStore {
    @observable events = null

    constructor(...args) {
        super(...args)

        autorun(() => {
            if (this.getStore('auth').user) {
                this.loadEvents().then(console.log)
            }

            console.log('---', 'autorun!')
        })
    }

    async loadEvents() {
        const eventsRef = firebase.database().ref('/events')

        const entities = await eventsRef.once('value')

        this.setEvents(entities.val())

        return 'events loaded!'
    }

    @action setEvents = entities => (this.events = entities)

    @computed
    get entities() {
        if (!this.events) return null
        console.log('---', 'compute entities!')
        return fbToArr(this.events)
    }
}

export default EventsStore
