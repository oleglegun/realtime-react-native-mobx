/* flow */
export function fbToEntities(map: {}): Array {
    Object.entries(map).forEach(([key, value]) => (value.uid = key))
    return map
}

//
// export function toJS(observableArr: Array<>) {
//     // return observableArr.map(item => item)
//     return observableArr
// }
