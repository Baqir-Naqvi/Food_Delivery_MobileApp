import { Image, SafeAreaView, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ChevronDownIcon, UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedCategory from '../components/FeaturedCategory'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useModal } from '../utils/ModalContext'


export default function Homescreen() {
  const navigation = useNavigation()
  const { setRestaurantlist} = useModal()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Food_Hunger',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerShown: false,
    })
  }, [])
   
    useEffect(() => {
   const options = {
  method: 'GET',
  url: 'https://foodbukka.herokuapp.com/api/v1/restaurant',
};
async function getdata(){
    await axios.request(options).then(function (response) {
      //slice the first 10 restaurants
    const data=response.data.Result.slice(0,10)
    setRestaurantlist(data)

}).catch(function (error) {
	console.error(error);
});
}

getdata()
    }, [])

  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar barStyle="dark-content" backgroundColor="#f4511e" />
  
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className="h-7 w-7 p-5 bg-grey rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Food_Hunger</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon color="#00CCBB" size={20} />
            </Text>
          </View>
          <UserIcon color="#00CCBB" size={35} />
         
        </View>


        {/* Search */}
        <View className='flex-row px-4'>
          <View className='flex-1'>
          
            <TextInput 
            placeholder="Search Food_Hunger"
            className='bg-gray-100 p-4 rounded-full w-full mx-auto mb-5'
            />
          </View>

        </View>

        {/* Body */}
        <ScrollView>
          {/* Categoies */}
          <Categories/>

          <View
          className="mt-4">

          {/* Featured Category */}
          <FeaturedCategory
            id="1"
            title="Featured"
            description="Desciprtion"
            category="Category"
            
          />
          </View>
          <View
           className="mt-4">
          <FeaturedCategory
            id="2"  
            title="Discount"
            description="Desciprtion"
            category="Category"
          />
          </View>
          <View
          className="mt-4 mb-3">
          <FeaturedCategory
            id="3"
            title="Places near You"
            description="Desciprtion"
            category="Category"
          />
          </View>
        </ScrollView>



    </SafeAreaView>
  )
}
