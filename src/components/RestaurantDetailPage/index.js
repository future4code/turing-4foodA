import React, {useState, useEffect} from 'react';
import { useHistory, useParams  } from "react-router-dom";
import {Image, RestContainer, Header, HeaderTitle, RestaurantTitle, RestaurantDescription, SectionContainer, 
ProductContainer, ImageProduct, DescriptionContainer, Ingredients, Description, SectionTitle, Bottom,
Price, ButtonAdd, ProductTitle, Container} from './Style';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddQuantity from '../AddQuantity/index';
import axios from 'axios';

function RestaurantDetailPage() {
  const history = useHistory();
  const [restaurant, setRestaurant] = useState({})
  const [showQuantity, setShowQuantity] = useState(false)

  const pathParams = useParams();

  const token = window.localStorage.getItem('token');

  const getRestaurantDetail = async () => {
    try {
      const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/${pathParams.restaurantId}`, {
        headers: {
          auth: token
        }
      })
      setRestaurant(response.data.restaurant)
    } catch(error) {
      history.push("/address")
      console.log(error.response)
    }
}; 

    useEffect(() => {
      getRestaurantDetail()
    }, [])

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

  const goToAddQuantity = () => {
    // history.push("/restaurant/details/quantity")
    setShowQuantity(!showQuantity)
  }
  
  return (
    <Container>
      {showQuantity && <AddQuantity showQuantity={showQuantity} setShowQuantity={setShowQuantity} />}
      <Header>
        <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
        <HeaderTitle>Restaurante</HeaderTitle> 
      </Header>
      <RestContainer>
        <div>
          <Image BackgroundImage={restaurant.logoUrl} />
          <RestaurantTitle>{restaurant.name}</RestaurantTitle>
          <Description>Burguer</Description>
          <RestaurantDescription>
              <Description>{restaurant.deliveryTime}min</Description>
              <Description>Frete R${restaurant.shipping && restaurant.shipping.toFixed(2)}</Description>
          </RestaurantDescription>
          <Description>{restaurant.address}</Description>            
        </div>
        <SectionContainer>
          {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Salgado") {
                  return <SectionTitle>Salgado</SectionTitle>
                }
          })}
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Salgado") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            <SectionTitle>Pastel</SectionTitle>
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pastel") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            <SectionTitle>Lanche</SectionTitle>
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Lanche") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            <SectionTitle>Acompanhamento</SectionTitle>
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Acompanhamento") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            <SectionTitle>Pizza</SectionTitle>
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Pizza") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}

            <SectionTitle>Bebida</SectionTitle>
            {restaurant.products && restaurant.products.map((product) => {
                if(product.category === "Bebida") {
                  return (
                    <>
                    <ProductContainer>
                        <div>
                          {product.photoUrl && <ImageProduct BackgroundImage={product.photoUrl} />}
                        </div>
                        <DescriptionContainer>
                            <ProductTitle>{product.name}</ProductTitle>
                            <Ingredients>{product.description}</Ingredients>
                                <Bottom>
                                  <Price>R${product.price.toFixed(2)}</Price>
                                  <ButtonAdd onClick={goToAddQuantity}>adicionar</ButtonAdd>
                                </Bottom>
                        </DescriptionContainer>
                    </ProductContainer>
                  </>
                  )}
            })}
        </SectionContainer>
      </RestContainer>
    </Container>
  );
}

export default RestaurantDetailPage;