import BaseStore from './BaseStore'
import { observable, action, computed } from 'mobx'
import AppNavigator from '../AppNavigator'
import { NavigationActions } from 'react-navigation'

export default class NavigationStore extends BaseStore {
    // get initial state
    @observable
    state = AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('Auth')
    )

    @action
    dispatch = action => {
        // change state based on event (action)
        this.state = AppNavigator.router.getStateForAction(action, this.state)
    }

    @computed
    get config() {
        return {
            state: this.state,
            dispatch: this.dispatch,
        }
    }

    navigate(routeName) {
        console.log('---', 'NavigationActions', routeName)
        this.dispatch(NavigationActions.navigate({ routeName }))
    }
}
9
