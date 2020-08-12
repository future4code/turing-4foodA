import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {RestContainer, Header, Form, Button, Image, Input, ScrollBar, ItemScrollBar, ProductContainer, ProductTitle, 
  ProductDescription, MainContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';


function RestaurantPage() {
  const history = useHistory();
  const [restaurant, setRestaurant] = useState({
    "id": "10",
    "description": "Restaurante sofisticado busca o equilíbrio entre ingredientes que realçam a experiência da culinária japonesa.",
    "deliveryTime": 50,
    "shipping": 13,
    "address": "Travessa Reginaldo Pereira, 130 - Ibitinga",
    "name": "Tadashii",
    "logoUrl": "http://soter.ninja/futureFoods/logos/tadashii.png",
    "category": "Asiática"
})

  const goToSearchPage = () => {
    history.push("/search-restaurant")
}

  return (
    <RestContainer>
      <Header>
      <p>Ifuture</p> 
      </Header>
      <MainContainer>
        <Form onClick={goToSearchPage}>
        <Button><SearchIcon /></Button>
        <Input type="search" placeholder="Restaurante" />
        </Form>
        <ScrollBar>
          <ItemScrollBar>Árabe</ItemScrollBar>
          <ItemScrollBar>Asiática</ItemScrollBar>
          <ItemScrollBar>Hamburguer</ItemScrollBar>
          <ItemScrollBar>Italiana</ItemScrollBar>
          <ItemScrollBar>Sorvetes</ItemScrollBar>
          <ItemScrollBar>Baiana</ItemScrollBar>
          <ItemScrollBar>Carnes</ItemScrollBar>
          <ItemScrollBar>Petiscos</ItemScrollBar>
          <ItemScrollBar>Mexicana</ItemScrollBar>
        </ScrollBar>
        <ProductContainer>
          <Image src={restaurant.logoUrl}></Image>
          <ProductTitle>{restaurant.name}</ProductTitle>
          <ProductDescription>
            <p>{restaurant.deliveryTime} min</p>
            <p>R${restaurant.shipping.toFixed(2)}</p>
          </ProductDescription>
        </ProductContainer>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>{restaurant.time} min</p>
            <p>Frete R$6,00</p>
          </ProductDescription>
        </ProductContainer>
        <ProductContainer>
          <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
          <ProductTitle>Burguer Eldorado</ProductTitle>
          <ProductDescription>
            <p>{restaurant.time} min</p>
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
      </MainContainer>
    </RestContainer>
  );
}

export default RestaurantPage;
