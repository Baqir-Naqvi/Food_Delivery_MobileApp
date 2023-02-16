import { View, Text,Image,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import {PlusCircleIcon,MinusCircleIcon,ShoppingCartIcon } from 'react-native-heroicons/solid';
import { useState,useEffect } from 'react';
import { useModal } from '../utils/ModalContext';
export default function MenuItem({img,title,description,price,_id}) {
    const [count,setCount]=useState(0);
    const {cartitems,setCartitems,handleupdate}=useModal();
    useEffect(() => {
        setCount(0);
    }, [])
    const [isPressed,setIsPressed]=useState(false);
    const handleItem=(img,title,description,price,_id)=>{
        setCartitems([...cartitems,{img,title,description,price,_id}])
        
    }
    const getitemIDcount=(id)=>{
        //count number of items with same id
        const count=cartitems.filter((item)=>item._id==id).length;
        return count;
    }
    const removeitemID=(id)=>{
        //find the id and remove first occurence
        const index=cartitems.findIndex((item)=>item._id==id);
        cartitems.splice(index,1);
        setCartitems([...cartitems]);
         const count=cartitems.filter((item)=>item._id==id).length;
         handleupdate();
        return count;
        
    }

  return (
    <>
    <TouchableOpacity onPress={
        ()=>{
            setIsPressed(!isPressed);
           setCount(getitemIDcount(_id))
        }
    } className="bg-white border p-4 mb-3 border-gray-200 ">
        <View className="flex-row justify-between bg-white">
            <View className="flex-1">
                <Text className="font-bold-400 text-sm">{title}</Text>
                <Text className="text-xs text-gray-400">{description}</Text>
                <Text className="text-xs mt-1 text-gray-400 ">$ {price}</Text>
            </View>
        
            <View>
                <Image style={{
                    borderColor:"#F3F3F3",
                }} source={{uri: img}} className="w-20 h-20" /> 

            </View>
            
        </View>
         {isPressed && (
    <View className="pt-3">
        <View className="flex-row justify-between bg-white">
            <View className="flex-row items-center">
                <TouchableOpacity
                 onPress={()=>{
                    if(count>0)
                   setCount(removeitemID(_id))
                }
                }>
                    <MinusCircleIcon color={count>0?"#00CCBB":"grey"} size={35} />
                </TouchableOpacity>
                <Text className="text-md font-bold px-2">{count}</Text>
                <TouchableOpacity onPress={()=>{
                    handleItem(img,title,description,price,_id);
                    setCount(count+1);
                }
                }>
                    <PlusCircleIcon color="gray" size={35} fill="#00CCBB"/>
                </TouchableOpacity>
            </View>
            
            </View>
    </View>
    )}
    </TouchableOpacity>

   
    </>
  )
}