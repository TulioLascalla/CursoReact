/**ESTUDO EM PROGRAMAÇÃO BASEADO EM CLASSES */
/**Outro meio de fazer
 * import React, {Component} from 'react'
 * export default class Contador extends Component{
 * 
 * }
 */
import React from 'react'
import "./Contador.css";

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"
/**
 * Criando a classe contador
 */
class Contador extends React.Component{

    /**Estado das variaveis, ||0 e ||5 são valores iniciais da variavel */
    state ={
                numero: this.props.numeroInicial || 0,
                passo: this.props.passoInicial || 5,
            };
    inc = () =>{
        
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () =>{
        
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
            
        })
    }


/**Comunicação direta: Passar a informação para preencher o input na hora de instanciar
 * o componente (passo={this.state.passo})
 * Comunicação Indireta: setPasso o componente filho ao ocorrer o evento(e) manda de volta
 * a informação do novo passo que precisa ser alterado no estado
 */
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes setInc ={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}
 /**Outro meio de exportar é criando a class e exportando
  * somente no final, "export default Contador", ou seja
  * ao inves do tradicioonal export na frente de class, podemos
  * exportala no final, por ser classe e n função
  */
export default Contador

/**Possivel possibilidade de solução tb:
 * Separar o contador em pequenos componentes, complexidade
 *aumenta pois deve estabelecer comunicações
 Vantagens: Reuso de trechos e quebras de componentes grandes
 */