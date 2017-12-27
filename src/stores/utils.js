/* flow */
export function fbToArr(map: {}): Array {
    return Object.keys(map).map(uid => ({ ...map[uid], uid }))
}
