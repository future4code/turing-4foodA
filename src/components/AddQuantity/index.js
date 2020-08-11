import React from 'react';
import {MainContainer, CardContainer, Select} from './Style';

function AddQuantity() {
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
              <p>ADICIONAR NO CARRINHO</p>
          </CardContainer>
      </MainContainer>
    );
  }
  
  export default AddQuantity;