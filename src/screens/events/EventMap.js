/* @flow */
import * as React from 'react'
import { StyleSheet, Text } from 'react-native'
import { MapView, Constants, Location, Permissions } from 'expo'
import { observable, action, runInAction } from 'mobx'
import { observer } from 'mobx-react'

type Props = {}

@observer
class EventMap extends React.Component<Props> {
    @observable permissionAsked = false
    @observable permissionGranted = false
    @observable location = null

    @action
    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.LOCATION)

        runInAction(() => {
            this.permissionAsked = true
            this.permissionGranted = status === 'granted'
        })

        if (this.permissionGranted) {
            const { coords } = await Location.getCurrentPositionAsync({})

            runInAction(() => {
                this.location = coords
            })
        }
    }

    render() {
        if (!this.permissionAsked) return null
        if (!this.permissionGranted) return <Text>Permission denied</Text>
        if (!this.location) return <Text>Location unknown</Text>

        console.log('--- location:', this.location)
        return (
            <MapView
                style={styles.map}
                initialRegion={{
                    ...this.location,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.1,
                }}
            >
                <MapView.Marker coordinate={this.location} title={'SF'} />
            </MapView>
        )
    }
}

const styles = StyleSheet.create({
    map: { flex: 1 },
})

export default EventMap
