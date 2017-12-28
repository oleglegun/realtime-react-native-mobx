import React from 'react'
import AppNavigator from './src/AppNavigator'
import { addNavigationHelpers } from 'react-navigation'
import { useStrict } from 'mobx'
import { Provider, observer } from 'mobx-react'
import stores from './src/stores'
import './src/fbConfig'

useStrict(true)

@observer
export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <AppNavigator
                    navigation={addNavigationHelpers(stores.navigation.config)}
                />
            </Provider>
        )
    }
}
