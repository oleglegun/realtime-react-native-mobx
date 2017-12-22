export const data = {
    events: {
        '1': {
            month: 'October',
            submissionDeadline: 'July 15, 2017',
            title: 'Frontend',
            url: 'http://example.com',
            when: 'June 4-5, 2017',
            where: 'Moscow, Russia',
        },
        '2': {
            month: 'October',
            submissionDeadline: 'July 15, 2017',
            title: 'Frontend',
            url: 'http://example.com',
            when: 'June 4-5, 2017',
            where: 'Moscow, Russia',
        },
        '3': {
            month: 'October',
            submissionDeadline: 'July 15, 2017',
            title: 'Frontend',
            url: 'http://example.com',
            when: 'June 4-5, 2017',
            where: 'Moscow, Russia',
        },
    },
    people: {
        '1': {
            email: 'asdf@sdaf.ewf',
            firstName: 'Oeg',
            lastName: 'dsaf',
        },
        '2': {
            email: 'asdf@sdaf.ewf',
            firstName: 'Oeg',
            lastName: 'dsaf',
        },
        '3': {
            email: 'asdf@sdaf.ewf',
            firstName: 'Oeg',
            lastName: 'dsaf',
        },
    },
}

function toArr(obj) {
    return Object.entries(obj).map(([uid, value]) => ({ uid, ...value }))
}

export const eventList = toArr(data.events)
export const peopleList = toArr(data.people)
