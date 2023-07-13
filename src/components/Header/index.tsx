import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

function Header() {
  const [value, setValue] = React.useState('Barcelona');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}}></TouchableOpacity>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.textInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgray',
    paddingLeft: 10,
    marginLeft: 10,
  },
  mapWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  mapText: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
  },
});

export default Header;
