/* @flow */
export type EventType = {
    uid: string,
    title: string,
    when: string,
    where: string,
    url: string,
    submissionDeadline: string,
}

export type Person = {
    avatar: ?string,
    email: string,
    firstName: string,
    lastName: string,
}

export type PeopleStore = {
    entities: Array<Person>,
    isLoading: boolean,
    isLoaded: boolean,
    fetchAll: () => void,
}

export interface INavigation {
    navigate: (routeName: string, props?: {}) => void;
    state: {params: {
        uid: ?string
        }}
}

export interface IPeople {
    updatePerson: (uid: string, payload: {}) => void
}

export type EntitiesStore = {
    entities: {},
    loading: boolean,
    loaded: boolean
}