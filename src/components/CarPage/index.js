import React, {useState} from 'react'


const CarPage = () => {

  const [ endereco, setEndereco ] = useState('')
  const [ frete, setFrete ] = useState('')
  const [ aPagar, setAPagar ] = useState('')
  const [ formaDePagamento, setFormaPagamento ] = useState('')
  return <div>
    <header className='Bar'>
      <h1 className='title'>Meu carrinho</h1>
    </header>
    <main>
      <div className='Rectangle'>
        <p className='Endereco-de-etrega'>Endereço de entrega</p>
        <p>{endereco}</p>
      </div>
      <div>
        <h2 className='Text'>Carrinho Vazio</h2>
        <p className='Frete'>Frete {frete}</p>
        <h3 className='SUBTOTAL'>SUBTOTAL</h3>
        <p className='R0000'>R$ {aPagar}</p>
      </div>
      <form className='pagamento'>
        <h3>Forma de pagamento</h3>
        <input type="radio" id="din" name="din" value="dinheiro" />
        <label for="din">Dinheiro</label>
        <input type="radio" id="din" name="din" value="dinheiro" />
        <label for="din">Cartão de crédito</label>
      </form>
      <button className='confirm'>Confirmar</button>
    </main>
  </div>
}

export default CarPage