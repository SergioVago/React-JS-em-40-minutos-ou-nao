import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default (props) =>
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#11 - Mega" color="#73503C">
        <Mega qtdeNumeros={8} />
      </Card>
      <Card titulo="#10 - Contador" color="#293E6A">
        <Contador passo={10} valor={100} />
      </Card>
      <Card titulo="#09 - Input" color="#9C0F5F">
        <Input />
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#000">
        <Super />
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#4298B5">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06 - Condicional v2" color="#FA6900">
        <CondicionalComIf numero={10} />
      </Card>
      <Card titulo="#05 - Condicional v1" color="#E94C6F">
        <Condicional numero={11} />
      </Card>
      <Card titulo="#04 - Repeticao" color="#008BBA">
        <Repeticao />
      </Card>
      <Card titulo="#03 - Componete Com Filhos" color="#D96459">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Bia</li>
            <li>Carlos</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componete Com Parametro" color="#FF85CB">
        <ComParametro titulo="Esse é o título"
          subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#92B06A">
        <Primeiro />
      </Card>
    </div>

  </div>