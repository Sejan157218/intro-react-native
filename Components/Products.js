import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Product from './Product'

export default function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://ancient-river-07627.herokuapp.com/watchCollection')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  }, [])
    return (
        <View>
            <Text>This is Products page</Text>
            <ScrollView>
            {
            products.map(product=><Product product={product}></Product>)
            
            }
            </ScrollView>
        </View>
    )
}

