import React, {useState} from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const CarPage = () => {

  const [ endereco, setEndereco ] = useState('Rua retiro dos artistas')
  const [ frete, setFrete ] = useState('')
  const [ aPagar, setAPagar ] = useState('')
  const [ formaDePagamento, setFormaPagamento ] = useState('')
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };



  return <div className='carrinho'>
    <header className='Bar'>
      <h1 className='title'>Meu carrinho</h1>
    </header>
    <main>
      <div className='Rectangle'>
        <p className='Endereco-de-entrega'>Endereço de entrega</p>
        <p className='endereco'>{endereco}</p>
      </div>
      <div className='text-car'>
        <h2 className='Text'>Carrinho Vazio</h2>
        </div>
        <div>
        <p className='Frete'>Frete R$0,00{frete}</p>
        <div className ='total'>
        <h3 className='SUBTOTAL'>SUBTOTAL</h3>
        <p className='R0000'>R$0,00 {aPagar}</p>
        </div>
      </div>
      <form className='pagamento'>
          <h3 className='forma-pagamento'>Forma de pagamento</h3>
          <hr className='linha' />
          <FormControl component="fieldset" className='formulario'>
            <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
              <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
              <FormControlLabel value="cartao-credito" control={<Radio />} label="Cartão de Crédito" />
            </RadioGroup>
          </FormControl>
        <button className='confirm' onClick={''}>Confirmar</button>
      </form>
    </main>
  </div>
}

export default CarPage