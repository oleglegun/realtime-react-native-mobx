import { StackNavigator, TabNavigator } from 'react-navigation'
import AuthScreen from './screens/Auth'
import EventList from './screens/events/EventList'
import PeopleList from './screens/people/PeopleList'
import EventPage from './screens/events/EventPage'
import EventMap from './screens/events/EventMap'
import PersonPage from './screens/people/PersonPage'
import Camera from './screens/Camera'
import ImagePreviewScreen from './screens/ImagePreview'

// AppNavigator passes navigation prop to all screens
const ListsNavigator = TabNavigator({
    EventList: { screen: EventList },
    PeopleList: { screen: PeopleList },
})

const AppNavigator = StackNavigator({
    Auth: { screen: AuthScreen },
    Lists: { screen: ListsNavigator },
    Event: { screen: EventPage },
    EventMap: { screen: EventMap },
    Person: { screen: PersonPage },
    Camera: { screen: Camera },
    ImagePreview: { screen: ImagePreviewScreen },
})

export default AppNavigator
