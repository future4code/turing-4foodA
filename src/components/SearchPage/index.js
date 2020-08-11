import React from 'react';
import { useHistory } from "react-router-dom";
import {HomeContainer, Header, Form, Button, Input, RestContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';

function SearchPage() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push("/")
}

  return (
    <HomeContainer>
      <Header>
      <p onClick={goToHomePage}>voltar</p>
      </Header>
      <RestContainer>
        <Form>
        <Button><SearchIcon /></Button>
        <Input type="search" placeholder="Restaurante" />
        </Form>
        <p>Busque por nome de restaurante</p>
      </RestContainer>
    </HomeContainer>
  );
}

export default SearchPage;