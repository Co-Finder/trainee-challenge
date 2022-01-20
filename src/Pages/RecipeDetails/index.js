import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from './styles'

export default function Home() {
    return(
        <View>
            <Image source={require('../../Img/Onboarding-logo.png')}/>
            <Text>Start Cooking</Text>
            <Text>Please enter your account here</Text>
        </View>
    )
}