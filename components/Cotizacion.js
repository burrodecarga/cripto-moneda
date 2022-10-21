import React from 'react'
import {StyleSheet, Text, View,ScrollView} from 'react-native'

const Cotizacion = ({resultado}) => {
  //console.log('cotiza',resultado)
  if (Object.keys(resultado).length === 0) return null
  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto,styles.precio]}>Precio{' '}
        <Text style={[styles.texto,styles.precio]}>{resultado.PRICE}</Text>
      </Text>
      <Text style={styles.texto}>Precio más alto del día{' '}
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>
      <Text style={styles.texto}>Precio más bajo del día{' '}
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>
      <Text style={styles.texto}>Variación últimas 24 Horas{' '}
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR} %</Text>
      </Text>
      <Text style={styles.texto}>Última Actualización{' '}
        <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  resultado: {
    backgroundColor: '#5e49e2',
    padding: 20,
    marginTop:10
  },
  texto: {
    color: '#FFF',
    fontFamily:'Lato-Black',
    fontSize:14
  },
  precio: {fontSize:24},
  span: { fontFamily:'Lato-Regular',},
})

export default Cotizacion
