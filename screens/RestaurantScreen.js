import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/outline'
import { useLayoutEffect, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline'
import MenuItem from '../components/MenuItem'
import { useModal } from '../utils/ModalContext'
import axios from 'axios'
import BasketIcon from '../components/BasketIcon'

export default function RestaurantScreen() {
  const navigation = useNavigation()
  const { menulist, setMenulist } = useModal()
  const {
    params: {
      title,
      imgurl,
      rating,
      address,
      short_description,
    },
  } = useRoute()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])
  useEffect(() => {
    const options = {
      method: 'GET',
    //   url: `https://foodbukka.herokuapp.com/api/v1/restaurant/${id}/menu`,
      url:'https://foodbukka.herokuapp.com/api/v1/menu'
    }
    function getmenulist(){
        axios
            .request(options)
            .then(function (response) {
            setMenulist(response.data.Result.slice(0, 10))
            })
            .catch(function (error) {
            console.error(error)
            })
    }
    getmenulist()
  }, [])
  return (
    <View>
        <BasketIcon/>
      <ScrollView vertical>
        <View className="bg-white">
          <Image source={{ uri: imgurl }} className="w-full h-60" />
          <Text className="font-bold text-lg px-4 pt-3">{title}</Text>
          <View className="flex-row items-center px-4">
            <StarIcon color="gray" size={15} fill="gray" />
            <Text className="text-xs text-gray-400">{rating}</Text>
            <Text className="text-xs text-gray-400 ml-1">Offers</Text>
            <Text className="text-xs text-gray-400 ml-5">{address}</Text>
          </View>
          <Text className="text-xs text-gray-400 px-4 mt-3">
            {short_description}
          </Text>

          <TouchableOpacity className="flex-row items-center space-between space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={25} fill="none" />
            <Text className="text-md text-gray-700 font-bold flex-1">
              Have a Food Allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="font-bold text-lg pt-3 pb-3 px-2 bg-gray-200">
            Menu
          </Text>
        </View>
        {/* Dish Items */}
        <View className="pb-24">
            {menulist.map((item,index) => {
            return (
                <MenuItem
                key={item._id}
                _id={item._id}
                id={item.id}
                title={item.menuname}
                img={item.images[++index%3]}
                price={40}
                description={item.description}
                />
            )
            })}
        
        </View>
          
      </ScrollView>
    </View>
  )
}
