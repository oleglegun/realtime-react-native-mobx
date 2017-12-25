/* @flow */
import { observable, action, autorun } from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class AuthStore extends BaseStore {
    @observable user = null

    constructor(...args: Array<{}>) {
        super(...args)

        autorun(() => {
            const routeName = this.user ? 'EventList' : 'Auth'

            // navigate to routeName
            this.getStore('navigation').navigate(routeName)
        })
    }

    signIn(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.setUser)
    }

    @action setUser = (user: {}) => (this.user = user)
}

export default AuthStore
