import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  const list = products.map((product, index) => <Text style={styles.lager} key={index}>{ product.name } - { product.stock }</Text>);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
      <View>
        <Text style={styles.header}>Lagerförteckning {"\n"}</Text>
        <Text style={styles.lager}> Namn - Antal i lager </Text>
        <StockList/>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: '#333',
    fontSize: 24,
    textAlignVertical: "center",
    textAlign: "center",
  },
  lager: {
    textAlignVertical: "center",
    textAlign: "center",
  }
});