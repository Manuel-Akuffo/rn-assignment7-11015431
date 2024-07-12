import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetailScreen = ({ route }) => { 
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.name}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 275,
    width: 165,
  },
  name: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
    color: 'orange',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  category: {
    fontSize: 14,
  },
});

export default ProductDetailScreen;
