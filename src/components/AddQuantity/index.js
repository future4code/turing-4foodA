import React, {useState} from 'react';
import {MainContainer, CardContainer, Select, ButtonAddToCart} from './Style';
// import CartContext from '../../context/CardContext';

function AddQuantity(props) {
  const [select, setSelect] = useState("")

  const selectedProduct = props.selectedProduct
  const addToCart = () => {
    // cartContext.dispatch({ type: "ADD_ITEM_TO_CART", product: selectedProduct })
    props.setShowQuantity(!props.showQuantity);

  }

  const handleSelectChange = (e) => {
    setSelect(e.target.value)
  }

  console.log(selectedProduct)

    return (
      <MainContainer>
          <CardContainer>
              <p>Selecione a quatidade desejada</p>
              <Select value={select} onChange={handleSelectChange}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
              </Select>
              <ButtonAddToCart onClick={addToCart}><p>ADICIONAR NO CARRINHO</p></ButtonAddToCart>
          </CardContainer>
      </MainContainer>
    );
  }
  
  export default AddQuantity;