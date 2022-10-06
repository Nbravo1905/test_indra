import React from 'react';
import * as RN from 'react-native';

const Button = ({text, color, onPress}) => {

  const btnStyles = [styles.btn, { backgroundColor: color }];

  return (
    <RN.TouchableOpacity style={btnStyles} onPress={() => onPress(color)}>
      <RN.Text style={styles.textBtn}>{text}</RN.Text>
    </RN.TouchableOpacity>
  )
}

const styles = RN.StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    elevation: 2,
    width: '40%',
    height: 40,
  },
  textBtn: {
    fontSize: 13.5,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Button
