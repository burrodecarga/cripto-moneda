/* eslint-disable spaced-comment */
import React, {useState, useEffect} from 'react'
import {View, Image, StyleSheet,ScrollView} from 'react-native'
import Formulario from './components/Formulario'
import Header from './components/Header'

import axios from 'axios'
import Cotizacion from './components/Cotizacion'

const App = () => {
  const [moneda, setMoneda] = useState('')
  const [criptomoneda, setCriptomoneda] = useState('')
  const [consultarAPI, setConsultarAPI] = useState(false)
  const [resultado, setResultado] = useState({})

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    console.log('Entrando a useEffect->aqui',consultarAPI,moneda,criptomoneda)
    const cotizarCriptomoneda = async () => {
      if(consultarAPI) {
        console.log('La consultarAPI es True')
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const resultado = await axios.get(url)
        //console.log('aqui',url,resultado)
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      } 
     
    }
     cotizarCriptomoneda() 
     setConsultarAPI(false)
  }, [consultarAPI])

  return (
    <View>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.formulario}>
        <Formulario
          moneda={moneda}
          criptomoneda={criptomoneda}
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
          setConsultarAPI={setConsultarAPI}
        />
      </View>
      <ScrollView>
           <Cotizacion resultado={resultado} />
      </ScrollView>
   
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 110,
    marginHorizontal: '2.5%',
  },
  formulario: {
    marginHorizontal: '2.5%',
  },
})

export default App
