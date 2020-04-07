import React, { useState } from 'react'
import { StyleSheet, Image, Dimensions, Modal, ScrollView, TouchableWithoutFeedback } from 'react-native'

import { Block, Text, Button, Utils } from 'expo-ui-kit'
import servers from '../constants/server'
import theme from '../constants/theme'
//constants
import { icons } from '../constants/images'
const { rgba } = Utils;
const { SIZES, COLORS } = theme;



const VPN = () => {

    const [connected, setConnection] = useState(false);
    const [server, setServer] = useState({
        name: "",
        icon: null
    });
    const [show, setShow] = useState(false);
    const automatic = {
        name: "Automatic",
        icon: icons.automatic
    }



    const renderServer = () => {
        let connection = (server.name != '' && server.icon) ? server : automatic;
        return (
            <Block flex={false} row center middle>
                <Image source={connection.icon} />
                <Text margin={[0, 10, 0, 15]} >{connection.name}</Text>
                <Image source={icons.dropdown} />

            </Block>
        )
    }

    const renderAlServers = () => {
        const connection = (server.name != '' && server.icon) ? server : automatic;

        return (

            <Modal visible={show} animationType="fade" transparent >
                <Block bottom color={rgba(COLORS.gray, .2)} >
                    <Block flex={false} white middle>
                        <Text style={{ marginTop: 10 }} center gray semibold padding={[10, 0]}>Pick Your Server.</Text>
                        <ScrollView>
                            {servers.map((item, key) => {

                                const isConnected = connection.name == item.name;
                                const isChecked = isConnected ? icons.checked : null;
                                return (

                                    <Button key={key} transparent
                                        onPress={() => {
                                            setShow(false);
                                            setServer(servers[key])
                                        }}
                                    >
                                        <Block flex={false} row center space="between"
                                            padding={[5, 30]}
                                        >

                                            <Block flex={false} row center>
                                                <Image source={item.icon} />
                                                <Text padding={[0, 30]}>{item.name}</Text>

                                            </Block>
                                            <Image source={isChecked} />
                                        </Block>

                                    </Button>

                                )
                            })}
                        </ScrollView>
                    </Block>
                </Block>
            </Modal>

        )
    }

    return (
        <Block safe center padding={[10, 0]} space='between'>
            <Block flex={false} padding={[20, 0]}>
                <Text title center semibold>
                    VPN
                    </Text>
            </Block>
            <Block center middle flex={false}>
                <Block center radius={20}
                    padding={[SIZES.base, SIZES.padding]}
                    middle row flex={false} white shadow>
                    <Block flex={false} padding={[0, 0, 0, 10]}>

                        <Text subtitle semibold gray>
                            {connected ? "Connected" : 'Disconnected'}
                        </Text>
                    </Block>
                    <Block
                        color={connected ? COLORS.success : rgba(COLORS.gray, 0.6)}
                        flex={false} radius={10} style={styles.status} />
                </Block>

                <Image style={styles.image} source={connected ? icons.online : icons.offline} />
                <Button outlined={connected}
                    theme={theme}
                    primary
                    style={styles.connect}
                    onPress={() => setConnection(!connected)}
                >
                    <Text white={!connected} caption center bold
                        padding={[10, 0]}>
                        {connected ? 'DISCONNECT NOW' : 'CONNECT NOW'}
                    </Text>
                </Button>
            </Block>

            <Block flex={false}
                center middle white shadow
                style={styles.servers}
            >
                <Button
                    onPress={() => setShow(!show)} transparent>
                    {renderServer()}
                </Button>

            </Block>
            {renderAlServers()}
        </Block>
    )
}

export default VPN

const styles = StyleSheet.create({
    connect: {
        width: Dimensions.get('screen').width / 2
    },
    image: {
        marginVertical: 10,
        width: 180,
        height: 180
    },
    status: {
        width: 8,
        height: 8,
        marginHorizontal: 8
    },
    servers: {
        width: Dimensions.get('screen').width,
        height: 45,
        shadowOpacity: 0.05,
        shadowOffset: {
            width: 0,
            height: -5
        }
    }
})
