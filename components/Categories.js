import { View, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <View className='pb-1'>
        <ScrollView horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        showsHorizontalScrollIndicator={false}
        >
      <CategoryCard title='Category' imgurl='https://links.papareact.com/gn7'/>
      <CategoryCard title='Category' imgurl='https://links.papareact.com/gn7'/>
      <CategoryCard title='Category' imgurl='https://links.papareact.com/gn7'/>
      <CategoryCard title='Category' imgurl='https://links.papareact.com/gn7'/>
      <CategoryCard title='Category' imgurl='https://links.papareact.com/gn7'/>
      </ScrollView>
    </View>
  )
}