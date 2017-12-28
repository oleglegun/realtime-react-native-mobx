import EntitiesStore, { fetchAllHelper } from './EntitiesStore'
import { action } from 'mobx'

class EventsStore extends EntitiesStore {
    @action fetchAll = fetchAllHelper('events')
}

export default EventsStore
