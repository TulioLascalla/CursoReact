import React from 'react'
import { useState } from 'react';
import "./Mega.css";

export default (props) =>{
    
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 -min)) + min //gerando numero aleatorio
        return array.includes(aleatorio) ?  //condição de conferir se o numero aleatorio ja esta contido ou n
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }
    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums) =>{
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return[...nums, novoNumero]
        }, [])
        .sort((n1,n2) => n1 - n2)
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)
    

    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de Numeros</label>
                <input type="number" value={qtde}
                    onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Numeros</button>
        </div>
    );
};