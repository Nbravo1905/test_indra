import React from 'react'
import * as RN from 'react-native';

const CardTitle = ({color}) => {

  const titleStyles = [styles.title, { color }];

  return (
    <RN.View style={styles.cardTitle}>
      <RN.Text style={titleStyles}>Prueba Basica</RN.Text>
    </RN.View>
  )
}

const styles = RN.StyleSheet.create({
  cardTitle: {
    marginVertical: '15%'
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  }
});

export default CardTitle
