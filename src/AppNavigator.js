import { StackNavigator, TabNavigator } from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventList from './screens/events/EventList'
import PeopleList from './screens/people/PeopleList'
import EventScreen from './events/EventScreen'

const ListsNavigator = TabNavigator({
    EventList: { screen: EventList },
    PeopleList: { screen: PeopleList },
})

const AppNavigator = StackNavigator({
    Auth: { screen: AuthScreen },
    Lists: { screen: ListsNavigator },
    Event: {screen: Event}
})

export default AppNavigator
