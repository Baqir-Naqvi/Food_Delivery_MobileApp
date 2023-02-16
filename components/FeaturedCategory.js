import { View, Text ,ScrollView} from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import { useModal } from '../utils/ModalContext'

export default function FeaturedCategory({id,title,description,category}) {

  const {restaurantlist} = useModal();
    
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">
             {title} 
            </Text>
            <ArrowRightIcon/>
        </View>

        <Text className='text-xs text-gray-400 px-4'>
            {description}
        </Text>

       
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle=
        {{  
          paddingHorizontal: 4,
        }}
        className='pt-4'
        >
          {/* Restaurants */}
        {
            restaurantlist.map((item)=>{
                return(
                    <RestaurantCard
                    key={item.id} id={item.id} title={item.businessname} imgurl={item.image} 
                    rating={item.reviews} genre={item.restauranttype} address={item.address}
                    short_description={item.address} dishes={item.foodMenu} long={-73.975}
                    lat={40.775}
                    />  
                )
            })
        }
        


        </ScrollView>



    </View>
  )
}