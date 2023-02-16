import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useModal } from '../utils/ModalContext'
import { useEffect,useState,useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
const BasketIcon = () => {
    const {cartitems,price,setPrice} = useModal();
    const navigation = useNavigation();
    useEffect(() => {
        let total=0;
        cartitems.map((item)=>{
            total+=item.price;
        })
        setPrice(total);
    }, [cartitems])


    if(cartitems.length===0) return null;

  return (
    <View className="absolute bottom-1 w-full z-50">
        <TouchableOpacity onPress={()=>navigation.navigate('Basket')} className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
            <Text className="bg-[#01A296] text-lg text-white font-extrabold px-2 py-1">
                {cartitems.length}
            </Text>
            <Text className="flex-1 text-lg text-white font-extrabold text-center">
                View Basket
            </Text>
            <Text className="text-lg text-white font-extrabold">
                $ {price}
            </Text>

      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon