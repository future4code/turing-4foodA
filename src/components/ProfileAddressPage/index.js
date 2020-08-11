import React, { useState } from 'react';
import styled from 'styled-components';
import {TextField} from '@material-ui/core';

const ContainerProfile = styled.form `
    background-color: #fff;
    font-family: 'Roboto';
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContainerInput = styled.div `
    height: 4.5rem;
`;

const StyledTextField = styled(TextField)`
    width: 20.5rem;
`;

const SendNewDatas = styled.button `
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: #e8222e;
    color: #000;
    font-size: 1rem;
    border: none;
    margin-top: 1rem;
`;

function ProfileAddressPage() {
  const [profile, setProfile] = useState(
    {
        id: "jMpvdFHbysmolONQMnF1",
        name: "Hyago",
        email: "hyago@gmail.com",
        cpf: "123.123.123-12",
        hasAddress: true,
        address: "R. Afonso Braz, 177, 71 - Vila N. Conceição"
    })

  return (
    <ContainerProfile>
      <ContainerInput>
        <StyledTextField 
          label="Nome"
          placeholder={profile.name}
          margin="normal"
          value={profile.name}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInput>
      <ContainerInput>
        <StyledTextField 
          label="E-mail"
          placeholder={profile.email}
          value={profile.email}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInput>
      <ContainerInput>
        <StyledTextField 
            label="CPF"
            placeholder={profile.cpf}
            margin="normal"
            value={profile.cpf}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            required
          />
      </ContainerInput>
      <SendNewDatas>Enviar</SendNewDatas>
    </ContainerProfile>
  );
}

export default ProfileAddressPage;