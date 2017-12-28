import BaseStore from './BaseStore'
import { observable, action, computed, toJS } from 'mobx'
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
        // console.log('--- config', this.state.routes)
        return {
            // mobx's observableArray !== array, thus convert to an array
            state: toJS(this.state),
            dispatch: this.dispatch,
        }
    }

    navigate(routeName) {
        this.dispatch(NavigationActions.navigate({ routeName }))
    }
}
