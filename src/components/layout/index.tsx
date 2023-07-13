import React from 'react';
import {View, StyleSheet} from 'react-native';
import CardsProperties from '../CardsProperties';
import Header from '../Header';

function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.search}>
        <Header />
      </View>
      <View style={styles.cards}>
        <CardsProperties />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: '100%',
  },
  search: {
    display: 'flex',
    width: '100%',
  },
  cards: {
    backgroundColor: 'green',
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

export default Layout;
