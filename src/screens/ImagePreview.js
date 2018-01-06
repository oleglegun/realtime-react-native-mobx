/* @flow */
import * as React from 'react'
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import firebase from 'firebase'
import { decode } from 'base64-arraybuffer'
import type { INavigation, IPeople } from '../types'
import { inject } from 'mobx-react'

type Props = {
    navigation: INavigation,
    people: IPeople,
}

type State = { uploading: boolean }

@inject('people')
class ImagePreviewScreen extends React.Component<Props, State> {
    static defaultProps = {}

    state = {
        uploading: false,
    }

    render() {
        const {
            height,
            width,
            uri,
            base64,
        } = this.props.navigation.state.params.photo

        const { uid } = this.props.navigation.state.params

        return (
            <View style={{ flex: 1 }}>
                <Image style={styles.image} source={{ uri: uri }} />
                <Button
                    title={'Upload'}
                    onPress={() => this.handleUpload(base64, uid)}
                />
                {this.state.uploading ? this.getLoader() : null}
                <Button title={'Retake'} onPress={this.handleRetake} />
            </View>
        )
    }

    handleUpload = async (base64: string, uid: string) => {
        this.setState({
            uploading: true,
        })
        const ref = firebase.storage().ref(`/avatars/${uid}.jpg`)

        await ref.put(decode(base64)).then(() => {
            this.setState({
                uploading: false,
            })
        })

        const avatar = await ref.getDownloadURL()

        this.props.people.updatePerson(uid, { avatar })

        console.log('---', this.props.navigation)
    }

    handleRetake = () => {
        this.props.navigation.goBack()
    }

    getLoader = () => {
        return <Text>Uploading...</Text>
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
    },
})

export default ImagePreviewScreen
