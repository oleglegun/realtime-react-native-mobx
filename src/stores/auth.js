/* @flow */
import { observable, action, autorun } from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'
import '../fbConfig'

class AuthStore extends BaseStore {
    @observable user = null

    constructor(...args: Array<{}>) {
        super(...args)

        autorun(() => {
            // redirect to Lists on successful log-in
            const routeName = this.user ? 'Lists' : 'Auth'

            // navigate to routeName
            this.getStore('navigation').navigate(routeName)

            if (!this.user) {
                this.signIn('test@test.com', 'qqqqqqqq')
            }
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
