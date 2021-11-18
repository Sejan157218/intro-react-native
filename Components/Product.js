import React from 'react'
import { View, Text,Image } from 'react-native'

export default function Product({product}) {
    const {title,price,desc,frontImg,rating} = product;
    return (
        <View>
            <Image
          source={{
            uri: `${frontImg}`,
          }}
          style={{ width: 200, height: 200 }}
        />
            <Text>{price}</Text>
            <Text>{title}</Text>
        </View>
    )
}
