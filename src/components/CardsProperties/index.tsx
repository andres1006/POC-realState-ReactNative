import React, {useState} from 'react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';

import CardProperty from './Cardproperty';

import {styles} from './styles';

function CardsProperties() {
  const [buildings] = useState<any[]>([]);
  const [loading] = useState<any[]>([]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        testID="apartment-list"
        data={loading ? [] : buildings || []}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem} testID="list-item">
            <CardProperty item={item} />
          </View>
        )}
        onEndReachedThreshold={0.9}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <Text style={styles.emptyText}>There is no data to displayed</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default CardsProperties;
