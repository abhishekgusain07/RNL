import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import images from "@/constants/images"
import icons from '@/constants/icons'
import { login } from '@/lib/appWrite'
const SignIn = () => {
  const handleLogin = async() => { 
    const result = await login();
    if (result) {
      console.log('Login success');
    } else {
      Alert.alert('Login failed');
    }
  }
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName="h-full">
        <Image  source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>
            Welcome to ReState
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get You Closer to {'\n'} Your <Text className='text-primary-300'>Dream Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>
            Login to Restate with Google
          </Text>
          <TouchableOpacity onPress={handleLogin}
            className='bg-white shadow-md shadow-zinc-300 rounded-fullw-ful
            py-4 mt-5'
          >
            <View className='flex flex-row items-center justify-center'>
              <Image 
                source={icons.google}
                className='size-5'
                resizeMode='contain'
              />
              <Text>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn ;