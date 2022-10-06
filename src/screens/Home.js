import * as React from 'react'
import * as RN from 'react-native';

import CardTitle from '../components/CardTitle';
import Button from '../components/Button';
import Colors from '../constants/Colors';

const Home = () => {

  const [colorTitle, setColorTitle] = React.useState('black');

  const handleSetColor = (color) => {
    let nameColor = Colors.blue === color ? 'Azul' : 'Rojo';
    setColorTitle(color);
    
    RN.Alert.alert(
      'Cambio de Color',
      `Señor usuario el color de la pantalla ha cambiado a ${nameColor}`
    )
  }

  return (
    <RN.SafeAreaView style={styles.container}>
      <CardTitle 
        color={colorTitle}
      />
      <RN.View style={styles.row}>
        <Button
          text='Cambiar Color Azul'
          color={Colors.blue}
          onPress={handleSetColor}
        />
        <Button
          text='Cambiar Color Rojo'
          color={Colors.red}
          onPress={handleSetColor}
        />
      </RN.View>
    </RN.SafeAreaView>
  )
}

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  }
});

export default Home;
