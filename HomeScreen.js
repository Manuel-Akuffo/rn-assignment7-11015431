import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Button,ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { CartContext } from '../context/CartContext'; 

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Ionicons name="menu-outline" size={24} color="black" />
      <Image source={require('../Logo.png')} style={styles.logoImage}></Image>
      <EvilIcons name="search" size={24} color="black" />
      <SimpleLineIcons name="bag" size={24} color="black" onPress={() => navigation.navigate('Cart')}/>
      </View>

      <View style={styles.header}>
        <Text style={styles.storyText}>O U R  S T O R Y</Text>
        <View style={styles.iconContainer}>
          <Image source={require('../Listview.png')} style={styles.listImage}></Image>
        </View>
        <View style={styles.iconContainer}>
        <MaterialIcons name="filter-list" size={20} color="black" />
        </View>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={[styles.product]}>
              <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}>
              <Image source={{ uri: item.image }} style={styles.dressImage} />
              <MaterialIcons name="add-circle-outline" size={24} color="black" style={styles.addImage}  onPress={() => addToCart(item)}/>
              </TouchableOpacity>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.category}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
  },
  header: {
    marginLeft: 8,
    marginBottom: 20, 
    flexDirection: 'row',
  },
  logoImage: {
    marginLeft: 126,
    marginRight: 63,
  },
  storyText: {
    marginRight: 150,
    fontSize: 20,
  },
  iconContainer: {
    padding: 2,
    height: 24,
    width: 24,
    borderRadius: 50,
    marginRight: 4,
    backgroundColor: '#D3D3D3',
  },
  listImage: {
    height: 20,
    width: 20,
  },
  product: {
    height: 275,
    width: 165,
    margin: 8,
  },
  imageContainer: {
    position: 'relative',
  },
   addImage: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 24,
    height: 24,
  },
  dressImage: {
    height: 221,
    width: 165,
  },
  name: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    color: 'orange',
    fontSize: 15,
  },
});

export default HomeScreen;
