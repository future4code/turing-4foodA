import React from 'react';
import { useHistory } from "react-router-dom";
import {HomeContainer, Header, Form, Button, Image, Input, ScrollBar, ItemScrollBar, ProductContainer, ProductTitle, ProductDescription, RestContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';

function Home() {
  const history = useHistory();

  const goToSearchPage = () => {
    history.push("/search-restaurant")
}

  return (
    <HomeContainer>
      <Header>
      <p>Ifuture</p> 
      </Header>
      <RestContainer>
        <Form onClick={goToSearchPage}>
        <Button><SearchIcon /></Button>
        <Input type="search" placeholder="Restaurante" />
        </Form>
        <ScrollBar>
          <ItemScrollBar>Burguer</ItemScrollBar>
          <ItemScrollBar>Asiática</ItemScrollBar>
          <ItemScrollBar>Massas</ItemScrollBar>
          <ItemScrollBar>Saudáveis</ItemScrollBar>
          <ItemScrollBar>Baiana</ItemScrollBar>
          <ItemScrollBar>Nordeste</ItemScrollBar>
          <ItemScrollBar>Árabe</ItemScrollBar>
          <ItemScrollBar>Pizzas</ItemScrollBar>
          <ItemScrollBar>Bebidas</ItemScrollBar>
          <ItemScrollBar>Vegetarianas</ItemScrollBar>
        </ScrollBar>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </ProductDescription>
        </ProductContainer>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </ProductDescription>
        </ProductContainer>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </ProductDescription>
        </ProductContainer>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>30 - 45 min</p>
            <p>Frete R$6,00</p>
          </ProductDescription>
        </ProductContainer>
      </RestContainer>
    </HomeContainer>
  );
}

export default Home;