import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { CartContext } from '../context/CartContext'; 

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../Logo.png')} style={styles.logoImage}></Image>
        <EvilIcons name="search" size={24} color="black" />
      </View>
      <View>
      <Text style={styles.checkoutText}>C H E C K O U T </Text>
      </View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.dressImage}/>
            </View>
            <View style={styles.textContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Feather name="x-circle" size={24} color="red" style={styles.removeIcon} onPress={() => removeFromCart(item.id)}/>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkoutText: {
    fontSize: 20,
    marginLeft: 90,
  },
  logoImage: {
    marginLeft: 120,
    marginRight: 100,
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  imageContainer: {
    height: 110,
    width: 82,
    marginRight: 20,
  },
  dressImage: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    width: 220,
    paddingTop: 30,
    position: 'relative',
  },
  name:{
    fontSize: 15,
  }, 
  subtitle: {
    fontSize: 13,
    color: 'gray',
  },
  price: {
    fontSize: 15,
    color: 'orange',
  },
  removeIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});

export default CartScreen;
