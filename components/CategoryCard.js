import { Image,View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CategoryCard({title,imgurl}) {
  return (
    <TouchableOpacity className='relative mr-2'>
        <Image source={{uri:imgurl}} className='h-20 w-20 rounded'/>
        <Text className='absoulte bottom-5 left-1 font-bold text-white'>{title}</Text>
    </TouchableOpacity>
  )
}