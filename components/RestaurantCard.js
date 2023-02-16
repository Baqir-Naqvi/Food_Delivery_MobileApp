import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon,MapIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native';
export default function RestaurantCard({id,title,imgurl,rating,genre,address,short_description,dishes,long,lat,
}) {
  const navigation=useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate("Restaurant",{id,title,imgurl,rating,genre,address,short_description,dishes,long,lat,
       })
    }}
     className="mx-4 bg-white">
      {/* Image */}
      <Image source={{uri: imgurl}} className="w-60 h-40" />
      {/* Title */}
      <Text className="font-bold text-lg">{title}</Text>
      {/* Rating */}
      <View className="flex-row items-center">
        <StarIcon color="gray" size={15} fill="gray" />
        <Text className="text-xs text-gray-400">{rating}</Text>
        <Text className="text-xs text-gray-400 ml-5">Offers</Text>
      </View>
      {/* Address */}
      <View className="flex-row items-center">
      <Text className="text-xs text-gray-400">{address}</Text>
      <MapIcon color="gray" size={15} fill="gray" />
      </View>

      
    </TouchableOpacity>
  )
}