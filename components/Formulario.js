/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, Alert} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import axios from 'axios'

const Formulario = ({moneda, criptomoneda, setMoneda, setCriptomoneda,setConsultarAPI}) => {
  const [criptomonedas, setCriptomonedas] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const resultado = await axios.get(url)
      setCriptomonedas(resultado.data.Data)
    }
    consultarAPI()
  }, [])

  const obtenerMoneda = moneda => {
   // console.log('moneda...')
    setMoneda(moneda)
  }

  const obtenerCriptoMoneda = cripto => {
    // console.log('criptomoneda...')
    setCriptomoneda(cripto)
  }

  const cotizarMoneda = () => {
    if (moneda.trim() === '' || criptomoneda.trim() === '') {
      mostrarAlerta()
      // eslint-disable-next-line no-useless-return
      return
    }
    setConsultarAPI(true)    
  }

  const mostrarAlerta = () => {
    Alert.alert('Error..', 'Los Campos son Obligatorios', [{text: 'ok'}])
  }

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        onValueChange={moneda => obtenerMoneda(moneda)}
        selectedValue={moneda}
        itemStyle={{height: 100}}>
        <Picker.Item key={1} label="-Seleccione Moneda--" value="" />
        <Picker.Item key={2} label="Dolar EEUU" value="USD" />
        <Picker.Item key={3} label="Peso Colombiano" value="COL" />
        <Picker.Item key={4} label="Euro" value="EUR" />
        <Picker.Item key={5} label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Crytomoneda</Text>
      <Picker
        onValueChange={cripto => obtenerCriptoMoneda(cripto)}
        selectedValue={criptomoneda}
        itemStyle={{height: 100}}>
        {criptomonedas.map(cripto => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.btnCotizar}
        onPress={() => cotizarMoneda()}>
        <Text style={styles.textCotizar}>Cotizar</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 15,
    marginVertical: 5,
  },
  btnCotizar: {
    backgroundColor: '#5e49e2',
    padding: 6,
    marginTop: 10,
  },
  textCotizar: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
})

export default Formulario
