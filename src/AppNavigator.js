import { StackNavigator } from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventList from './screens/EventList'

const AppNavigator = StackNavigator({
    Auth: { screen: AuthScreen },
    EventList: { screen: EventList },
})

export default AppNavigator
