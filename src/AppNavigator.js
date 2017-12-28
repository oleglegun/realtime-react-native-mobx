import { StackNavigator, TabNavigator } from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventList from './screens/events/EventList'
import PeopleList from './screens/people/PeopleList'
import EventPage from './screens/events/EventPage'

// AppNavigator passes navigation prop to all screens
const ListsNavigator = TabNavigator({
    EventList: { screen: EventList },
    PeopleList: { screen: PeopleList },
})

const AppNavigator = StackNavigator({
    Auth: { screen: AuthScreen },
    Lists: { screen: ListsNavigator },
    Event: { screen: EventPage },
})

export default AppNavigator
