import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import VPN from '../screens/VPN'
import Welcome from '../screens/Welcome'

const Screens = createSwitchNavigator({
    Welcome,
    VPN
});

export default createAppContainer(Screens);