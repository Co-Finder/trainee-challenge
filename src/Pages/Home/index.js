import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './styles'

import { MotiView } from 'moti';
// from={{opacity=0}} animated={{opacity=1}} transition={{type:'timing', duration: 3000}}
export default function Home() {
    return(
        <View>
            <Image source={require('../../Img/Onboarding-logo.png')}/>
            <Text>Start Cooking</Text>
            <Text>Please enter your account here</Text>
        </View>
    )
}