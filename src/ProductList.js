/* @flow */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

function ProductListScreen(props) {
  const [productList, onProductList] = useState([]);

  useEffect(()=>{
    fetch('http://test.com360degree.com/apis/getProductList', {
      method: 'GET'
    })
      .then(result => result.json())
      .then(res => {
        onProductList(res);
      });
  },[]);
  console.log('productList is', productList);
    return (
      <View style={styles.container}>
      {productList.length ? (
        productList.map(list => {
          return(
            <View
              key={list.id}
              style={{
                //flexDirection: 'row',
                //alignItems: 'center',
                justifyContent: 'space-between',
                margin: 10
              }}>
              <Text>Name: {list.name}</Text>
              <Text>Price: {list.price}</Text>
              <Text>Status: {list.stock_status}</Text>
            </View>
          )
        })):(
          <Text>No data found</Text>
        )}
      </View>
    );
  };

export default ProductListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
