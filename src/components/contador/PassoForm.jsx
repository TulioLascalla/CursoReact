import React from 'react'
export default props =>{
    return(
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number"
            value={props.passo} 
            /**Com o onChange se chama a função que foi passada como parametro */
            onChange={e => props.setPasso(+e.target.value)}
            /**O +e passa a o value como um numero inteiro  */
            />
        </div>
    )
}