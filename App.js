import React from 'react'
import AppNavigator from './src/AppNavigator'
import 'firebase'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import stores from './src/stores'

useStrict(true)

export default class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <AppNavigator />
            </Provider>
        )
    }
}
