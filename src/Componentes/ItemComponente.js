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
  setState,
} from 'react-native';

export default class ItemComponente extends Component{
  


  constructor(props){
    super(props)
    this.state = {
      descricao: '',
      datadetermino: '',
      prioridade: '',
      status: 'Pendente',
      lista: []
      
    }
    
    }
  render(){
    return(
      <View>
        <View style={{margin: 5,}}>
      <Text style={style.caixa} style={{ fontWeight: 'bold'}}>Descrição: {this.props.descricao}</Text>
      <Text style={style.caixa} style={{ fontWeight: 'bold'}}>Datadetérmino: {this.props.datadetermino}</Text>
      <Text style={style.caixa} style={{ fontWeight: 'bold'}}>Prioridade: {this.props.prioridade}</Text>
      <Text style={style.caixa} style={{ fontWeight: 'bold'}}>Estado: {this.state.status}</Text>
      </View>
      <View style={style.areabotao}>
        <TouchableOpacity 
        onPress={()=>this.props.concluir(this.props.item) }
         style={style.botao2}>
          <Text style={{color: 'white', fontWeight: 'bold'}}> CONCLUIR</Text>
          
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> this.props.remover(this.props.id)}
        style={style.botao3}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>    APAGAR</Text>
        </TouchableOpacity>
      </View>
      
      </View>
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
    margin: 3,
  },

  botao: {
     backgroundColor: 'black',
     width: 80,
     margin: 5,
     borderRadius: 10,
  },
  botao2: {
    backgroundColor: 'green',
    width: 80,
    margin: 5,
    borderRadius: 10,
    
  },

    botao3: {
      backgroundColor: 'red',
      width: 80,
      margin: 5,
      borderRadius: 10,},

  areabotao:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})