import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default (props) =>
  <div className="App">
    <Card titulo="#06 - Condicional v2">
      <CondicionalComIf numero={10} />
    </Card>
    <Card titulo="#05 - Condicional v1">
      <Condicional numero={11} />
    </Card>
    <Card titulo="#04 - Repeticao">
      <Repeticao />
    </Card>
    <Card titulo="#03 - Componete Com Filhos">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Daniel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#02 - Componete Com Parametro">
      <ComParametro titulo="Esse é o título"
        subtitulo="Esse é o subtítulo" />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>