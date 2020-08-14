import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

import {RestContainer, Header, Form, Button, Image, Input, ScrollBar, ItemScrollBar, ProductContainer, ProductTitle, 
ProductDescription, MainContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';


function RestaurantPage() {
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([])
  const [filters, setFilters] = useState("")

  const token = window.localStorage.getItem('token');

  useEffect(() => {
    getRestaurants()
  }, [])

  const getRestaurants = async () => {
      try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants", {
          headers: {
            auth: token
          }
        })
        setRestaurants(response.data.restaurants)
      } catch(error) {
        history.push("/address")
        console.log(error.response)
      }
  };

  console.log(restaurants)

  const goToSearchPage = () => {
    history.push("/search-restaurant")
  }

  const sendDetailPage = (restaurantId) => {
    history.push(`/restaurant/details/${restaurantId}`)
  }

  const filteredRestaurant = (id) => {
    switch (id) {
      case "Árabe":
        if (filters.includes(id)) {
          setFilters("")
        } else {
          setFilters(id)
        }    
      case "Asiática":
        setFilters(id)
      // default:
      //   if ()
    }
  }

  console.log(filters)

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
          <ItemScrollBar onClick={() => filteredRestaurant("Árabe")}>Árabe</ItemScrollBar>
          <ItemScrollBar onClick={() => filteredRestaurant("Asiática")}>Asiática</ItemScrollBar>
          <ItemScrollBar>Hamburguer</ItemScrollBar>
          <ItemScrollBar>Italiana</ItemScrollBar>
          <ItemScrollBar>Sorvetes</ItemScrollBar>
          <ItemScrollBar>Baiana</ItemScrollBar>
          <ItemScrollBar>Carnes</ItemScrollBar>
          <ItemScrollBar>Petiscos</ItemScrollBar>
          <ItemScrollBar>Mexicana</ItemScrollBar>
        </ScrollBar>
        {restaurants !== 0 && restaurants.map((restaurant) => {
          if (filters !== "" && restaurant.category === filters) {
            return (
                  <ProductContainer onClick={() => sendDetailPage(restaurant.id)} key={restaurant.id}>
                    <Image BackgroundImage={restaurant.logoUrl} />
                    <ProductTitle>{restaurant.name}</ProductTitle>
                    <ProductDescription>
                      <p>{restaurant.deliveryTime} min</p>
                      <p>R${restaurant.shipping.toFixed(2)}</p>
                    </ProductDescription>
                  </ProductContainer>
            );
          } if (filters === "") {
            return (
                  <ProductContainer onClick={() => sendDetailPage(restaurant.id)} key={restaurant.id}>
                    <Image BackgroundImage={restaurant.logoUrl} />
                    <ProductTitle>{restaurant.name}</ProductTitle>
                    <ProductDescription>
                      <p>{restaurant.deliveryTime} min</p>
                      <p>R${restaurant.shipping.toFixed(2)}</p>
                    </ProductDescription>
                  </ProductContainer>
            );
          } 
        })}
      </MainContainer>
    </RestContainer>
  );
}

export default RestaurantPage;
