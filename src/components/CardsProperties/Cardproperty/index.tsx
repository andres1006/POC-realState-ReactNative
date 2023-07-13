import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

import {styles} from '../styles';

function CardProperty({item}: any) {
  return (
    <>
      <ImageBackground
        source={{uri: item.picture}}
        style={styles.photoBG}
        imageStyle={styles.photo}>
        <View style={styles.priceView}>
          <Text style={styles.price}>{item.price} €</Text>
          <View style={styles.flexView}>
            <Text style={styles.sqmText}>{item.pricePerSqm} €/m²</Text>
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.infoView}>
          <View style={styles.itemView}>
            {/* <Ionicons name="md-bed-outline" size={15} color="gray" /> */}
            <Text style={styles.infoText}>{item.numberOfBedrooms} habs.</Text>
          </View>
          <View style={styles.itemCenterView}>
            {/*        <MaterialCommunityIcons
                    name="shower"
                    size={15}
                    color="gray"
                  /> */}
            <Text style={styles.infoText}>{item.numberOfBathrooms} baño</Text>
          </View>
          <View style={styles.itemRightView}>
            {/*   <MaterialCommunityIcons
                    name="square-off-outline"
                    size={15}
                    color="gray"
                  /> */}
            <Text style={styles.infoText}>{item.sqm} m²</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export default CardProperty;
