import Auth from './auth'
import Navigation from './navigation'

const stores = {}

stores.auth = new Auth(stores)
stores.navigation = new Navigation(stores)

export default stores