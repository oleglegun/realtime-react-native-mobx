/* @flow */
import { observable, action } from 'mobx'
import firebase from 'firebase'
import BaseStore from './BaseStore'

class AuthStore extends BaseStore {
    @observable user = null

    constructor(...args: Array<{}>) {
        super(...args)
    }

    @action
    signIn(email: string, password: string) {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => (this.user = user))
    }
}

export default AuthStore
