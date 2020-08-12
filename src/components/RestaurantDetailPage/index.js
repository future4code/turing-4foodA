import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {Image, RestContainer, Header, HeaderTitle, RestaurantTitle, RestaurantDescription, SectionContainer, 
ProductContainer, ImageProduct, DescriptionContainer, Ingredients, Description, SectionTitle, Bottom,
Price, ButtonAdd, ProductTitle, Container} from './Style';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddQuantity from '../AddQuantity/index'

function RestaurantDetailPage() {
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

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

  const goToAddQuantity = () => {
    history.push("/restaurant/details/quantity")
  }
  
  return (
    <Container>
      <Header>
        <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
        <HeaderTitle>Restaurante</HeaderTitle> 
      </Header>

      <RestContainer>
        <Image src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'}></Image>
        <RestaurantTitle>{restaurant.name}</RestaurantTitle>
        <Description>Burguer</Description>
        <RestaurantDescription>
            <Description>{restaurant.deliveryTime}min</Description>
            <Description>R${restaurant.shipping.toFixed(2)}</Description>
          </RestaurantDescription>
        <Description>{restaurant.address}</Description>            
        <SectionTitle>Principais</SectionTitle>
        <SectionContainer>
           <ProductContainer>
              <ImageProduct src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'} />
              <DescriptionContainer>
                  <ProductTitle>Bullguer</ProductTitle>
                  <Ingredients>Pão, salada, hamburguer e molho.</Ingredients>
                      <Bottom>
                        <Price>R$ 15,00</Price>
                        <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                      </Bottom>
              </DescriptionContainer>
           </ProductContainer>
        </SectionContainer>
        <SectionTitle>Acompanhamentos</SectionTitle>
        <SectionContainer>
        <ProductContainer>
              <ImageProduct src={'https://media-manager.noticiasaominuto.com/1920/naom_5ad728daf049e.jpg'} />
              <DescriptionContainer>
                  <ProductTitle>Bullguer</ProductTitle>
                  <Ingredients>Pão, salada, hamburguer e molho.</Ingredients>
                      <Bottom>
                        <Price>R$ 15,00</Price>
                        <ButtonAdd>adicionar</ButtonAdd>
                      </Bottom>
              </DescriptionContainer>
           </ProductContainer>
        </SectionContainer>
      </RestContainer>
    </Container>
  );
}

export default RestaurantDetailPage;