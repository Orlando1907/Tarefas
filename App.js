import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useState,
} from 'react-native';
import Item from './src/Models/Atividades'
import ItemComponente from './src/Componentes/ItemComponente'
import ItemDatabase from './src/Database/ItemDatabase';

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      descricao: '',
      datadetermino: '',
      prioridade: '',
      status: 'Concluida',
      lista: []
    }
    this.Listar();
    }
  

Listar = () => {
  const banco = new ItemDatabase();
  banco.Listar().then(
    listaCompleta => {
      this.setState({lista: listaCompleta})
    }
  )
}
Cadastrar = (descricao, datadetermino, prioridade) => {
  const itemNovo = new Item(descricao, datadetermino, prioridade);
  const banco = new ItemDatabase();
  banco.Inserir(itemNovo);
  this.Listar();
}


Concluir = (item) => {
  const banco = new ItemDatabase();
  banco.Concluir(item);
  this.Listar();
}

Remover = (id) => {
 const banco = new ItemDatabase();
 banco.Remover(id);
 this.Listar();
}

  render(){
    return(
      <ScrollView>
        <View style={style.corpo}>
      <Text style={style.titulo}>Controle de Atividades</Text> 
    <Text style={{color: 'black', fontWeight: 'bold'}}>|Descrição|</Text>
      <TextInput onChangeText={(valorDigitado) =>{this.setState({descricao: valorDigitado})}} style={style.caixa}></TextInput>
      <Text style={{color: 'black', fontWeight: 'bold'}}>|Data de Término|</Text>
      <TextInput onChangeText={(valorDigitado) =>{this.setState({datadetermino: valorDigitado})}} style={style.caixa}></TextInput>
      <Text style={{color: 'black', fontWeight: 'bold'}}>|Prioridade|</Text>
      <TextInput onChangeText={(valorDigitado) =>{this.setState({prioridade: valorDigitado})}} style={style.caixa}></TextInput>

      </View>
      <View style={style.areabotao}>
        <TouchableOpacity 
        onPress={() => this.Cadastrar(this.state.descricao, this.state.datadetermino, this.state.prioridade, this.status)}
        style={style.botao}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>  SALVAR</Text>
        </TouchableOpacity>
      </View>
      <View>
      <Text style={style.titulo2}>Lista de Atividades</Text>
      {
        this.state.lista.map( elementoLista => (
           <ItemComponente 
           key={elementoLista.id}
           id={elementoLista.id}
           item={elementoLista}
           descricao={elementoLista.descricao}
           datadetermino={elementoLista.datadetermino}
           prioridade={elementoLista.prioridade} 
           status={elementoLista.status} 
           concluir={this.Concluir}
           remover={this.Remover}
          />
           
           
        )
        )
      }
      </View>
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  titulo: {
    fontSize: 30,
    margin: 5,
    color: 'black', 

  },
  titulo2: {
    fontSize: 20,
    margin: 5,
    color: 'black', 

  },

  corpo: {
    alignItems: 'center',
    
  },

  caixa:{
    borderWidth: 1,
    width: 380,
    height: 35,
    margin: 3,
    borderColor: 'blue',
    borderRadius: 10,
  },

  botao: {
     backgroundColor: 'black',
     width: 65,
     margin: 5,
     borderRadius: 10,
  },

  areabotao:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})