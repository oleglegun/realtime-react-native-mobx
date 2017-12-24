import BaseStore from './BaseStore'
import { observable, action } from 'mobx'
import AppNavigator from '../AppNavigator'

export default class NavigationStore extends BaseStore {
    // get initial state
    @observable
    state = AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('auth')
    )

    @action
    dispatch = event => {
        // change state based on event (action)
        this.state
    }
}
