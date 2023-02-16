import {SafeAreaView } from 'react-native'
import React,{useEffect} from 'react'
import * as Animateable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'
export default function PreparingOrder() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2000);
    }, [])
  return (
    <SafeAreaView className='flex-1 bg-[#00CCBB] items-center justify-center'>
        <Animateable.Image
        source={
            require('../assets/splash.png')
        }
         animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
        />
        <Animateable.Text animation="slideInUp" iterationCount={1} className="text-white">
            Please wait while we are preparing your order
        </Animateable.Text>
        <Progress.CircleSnail color={['#fff']} size={60} thickness={5} />
    </SafeAreaView>
  )
}