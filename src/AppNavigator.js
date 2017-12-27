import { StackNavigator } from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventList from './screens/EventList'
import HomeScreen from "./screens/Home"

const AppNavigator = StackNavigator({
    Auth: { screen: AuthScreen },
    EventList: { screen: EventList },
    Home: {screen: HomeScreen}
})

export default AppNavigator
