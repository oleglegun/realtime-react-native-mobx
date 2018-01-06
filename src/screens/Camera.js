/* @flow */
import * as React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Camera, Permissions } from 'expo'
import type { INavigation } from '../types'

type Props = {
    navigation: INavigation,
}

type State = {
    hasCameraPermission?: boolean,
    type: {},
}

class CameraScreen extends React.Component<Props, State> {
    camera: ?{ takePictureAsync: ({ base64: boolean }) => mixed }

    state = {
        hasCameraPermission: false,
        type: Camera.Constants.Type.front,
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    render() {
        const { hasCameraPermission } = this.state
        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => {
                            this.camera = ref
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}
                        >
                            <TouchableOpacity
                                style={styles.takePhotoButton}
                                onPress={this.handleTakePicture}
                            >
                                <Text>Take Picture</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            )
        }
    }

    handleTakePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync({ base64: true })

            const personUID = this.props.navigation.state.params.uid
            this.props.navigation.navigate('ImagePreview', {
                photo,
                uid: personUID,
            })
        }
    }
}

const styles = StyleSheet.create({
    takePhotoButton: {
        flex: 1,
        height: 30,
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'red',
    },
})

export default CameraScreen
