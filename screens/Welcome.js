import React from 'react'
import { StyleSheet, Image, Dimensions, ScrollView } from 'react-native'


import { Block, Text, Button, Utils } from 'expo-ui-kit'
import theme from '../constants/theme'
//constants
import { background } from '../constants/images'
import { rgba } from 'expo-ui-kit/src/utils'
import Animated from 'react-native-reanimated'

const backgrounds = [
    {
        title: 'Secured, Forever',
        img: background.welcome,
        descriptionL: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
    },
    {
        title: 'Secured, Forever',
        img: background.encrypted,
        descriptionL: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
    },
    {
        title: 'Secured, Forever',
        img: background.privacy,
        descriptionL: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem '
    },
]
// const { theme } = Utils;
const { SIZES, COLORS } = theme;


const scrollX = new Animated.Value(0);

const renderImages = (
    <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        snapToAlignment="center"
        horizontal
    // onScroll={
    //     Animated.event([
    //         { nativeEvent: { contentOffset: { x: scrollX } } }
    //     ])
    // }
    >
        {backgrounds.map((bg, key) => (
            <Block
                key={key}
                center
                style={{ width: Dimensions.get('screen').width }}>
                <Image source={background.welcome} resizeMode="center" style={{
                    width: Dimensions.get('screen').width * (2 / 4)
                }} />
            </Block>
        ))}


    </ScrollView>

)

const renderDots = (
    <Block flex={false} row center middle margin={[0, 0, 10, 0]}>

        <Block
            flex={false}
            margin={[5, 5]}
            style={{ height: 8, width: 8 }}
            color={rgba(COLORS.gray, 1)}
            radius={8}
        />
        <Block
            flex={false}
            margin={[5, 5]}
            style={{ height: 6, width: 6 }}
            color={rgba(COLORS.gray, 0.4)}
            radius={3}
        />
        <Block
            flex={false}
            margin={[5, 5]}
            style={{ height: 6, width: 6 }}
            color={rgba(COLORS.gray, 0.4)}
            radius={3}
        />

    </Block>
)

const Welcome = ({ navigation }) => {



    return (
        <Block padding={[20, 5]}>

            <Block center middle>
                {renderImages}
            </Block>
            <Block flex={false} center margin={60} bottom>
                <Text h2 semibold>Secured, forever.</Text>
                <Text center caption grey margin={[10, 0]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </Text>
                {renderDots}
                <Button
                    primary
                    theme={theme}
                    style={{ borderRadius: 30 }}
                    onPress={() => navigation.navigate('VPN')}
                >
                    <Text center caption bold white padding={[6, 26]}>GET STARTED</Text>
                </Button>
            </Block>
        </Block>

    )
}

export default Welcome

const styles = StyleSheet.create({})
