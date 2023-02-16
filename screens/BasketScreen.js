import { View, Text,SafeAreaView, TouchableOpacity,Image,ScrollView } from 'react-native'
import React from 'react'
import { useModal } from '../utils/ModalContext'
import { useEffect,useState,useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/outline'

export default function BasketScreen() {
    const {cartitems,setPrice} = useModal();
    const [grouped,setGrouped]=useState([]);
    const navigation = useNavigation();
    
    useMemo(() => 
    {
        const groupeditems=cartitems.reduce((results,item)=>{
            ((results[item._id]=results[item._id]||[]).push(item))
                return results;
        },{})
                setGrouped(groupeditems);
    }, [cartitems])
 
    const handleRemove=(id)=>{
        //find the item price
        const itemprice=cartitems.find((item)=>item._id===id).price;
        setPrice((prev)=>prev-itemprice);
        //find the id and remove first occurence
        const index=cartitems.findIndex((item)=>item._id==id);
        cartitems.splice(index,1);
       
             const groupeditems=cartitems.reduce((results,item)=>{
            ((results[item._id]=results[item._id]||[]).push(item))
                return results;
        },{})
       
                setGrouped(groupeditems);
      
    }
    if(cartitems.length===0) return null;

  return (
    <SafeAreaView className="flex-1 bg-white ">
        <View className='flex-1 bg-gray-100'>
            <View className='p-5 border-b border-[#00CCBB] bg-white shadow-xs'>
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{cartitems[0].title}</Text>
                </View>
                <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon  className="h-6 w-6 text-gray-400" color={"#00CCBB"} height={35} width={35}/>
                </TouchableOpacity>
            </View>
            <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'> 
                <Image
                    source={{
                        uri:"https://links.papareact.com/wru",
                    }}
                    className="h-10 w-10 bg-gray-300 rounded-full"
                />
                <Text className="flex-1 font-bold">Delivery in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#00CCBB] font-bold">Change</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
               {Object.entries(grouped).map(([key,items])=>(
                    <View key={key} className='flex-row space-x-3 px-5 py-2 bg-white'>
                        <Text>
                            {items.length}x
                        </Text>
                        <Image
                            source={{uri:items[0].img}}
                            className="h-12 w-12 rounded-full"
                        />
                        <Text className='flex-1'>
                            {items[0].title}
                        </Text>
                        <Text className='text-gray-400'>
                            ${items[0].price * items.length}
                        </Text>
                        <TouchableOpacity
                            onPress={()=>handleRemove(items[0]._id)}>
                            <Text className="text-[#00CCBB] font-bold">Remove</Text>
                        </TouchableOpacity>
                    </View>
                ))}

            </ScrollView>
            <View className='p-5 bg-white mt-5 space-y-4'>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Subtotal</Text>
                    <Text className='text-gray-400'>$ {cartitems.reduce((total,item)=>total+item.price,0)}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-400'>Delivery Fee</Text>
                    <Text className='text-gray-400'>$ 9.60</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-extrabold'>Order Total</Text>
                    <Text className='font-extrabold'>$ {cartitems.reduce((total,item)=>total+item.price,0)+9.60}</Text>
                </View>
                <TouchableOpacity className='bg-[#00CCBB] rounded-lg py-3' onPress={()=>{navigation.navigate("PreparingOrder")}}>
                    <Text className='text-white text-center font-bold'>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}