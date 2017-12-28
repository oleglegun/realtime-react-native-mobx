/* @flow */
export type Event = {
    uid?: string,
    title: string,
    when: string,
    where: string,
    url: string,
    submissionDeadline: string,
}

export type Person = {
    email: string,
    firstName: string,
    lastName: string,
}

export type PeopleStore = {
    entities: Array<Person>,
    isLoading: boolean,
    isLoaded: boolean,
    fetchAll: () => void
}

export interface INavigation {
    navigate: (routeName: string, props: {}) => void
}