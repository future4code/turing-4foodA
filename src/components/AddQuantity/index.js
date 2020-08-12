import React from 'react';
import {MainContainer, CardContainer, Select, ButtonAddToCart} from './Style';

function AddQuantity(props) {
  const addToCart = () => {
    props.setShowQuantity(!props.showQuantity);
  }
    return (
      <MainContainer>
          <CardContainer>
              <p>Selecione a quatidade desejada</p>
              <Select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </Select>
              <ButtonAddToCart onClick={addToCart}><p>ADICIONAR NO CARRINHO</p></ButtonAddToCart>
          </CardContainer>
      </MainContainer>
    );
  }
  
  export default AddQuantity;