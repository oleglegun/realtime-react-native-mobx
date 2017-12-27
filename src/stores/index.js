import Navigation from './navigation'
import Auth from './auth'
import People from './people'
import Events from './events'

const stores = {}

// Auth store uses Navigation store => navigation comes first
stores.navigation = new Navigation(stores)
stores.auth = new Auth(stores)
stores.people = new People(stores)
stores.events = new Events(stores)

export default stores
