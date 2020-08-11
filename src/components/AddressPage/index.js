import React from 'react'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components'


const DivSignup = styled.div`
    width: 22.5rem;
    height: 40rem;
    border: 1px solid black;
    margin: 0 auto;

`

const FormSignup = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 32rem;
`

const ButtonCreate = styled.button`
    width: 20.5rem;
    height: 2.625rem;
    border-radius: 2px;
    background-color: red;
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`

const TextFieldSignup = styled(TextField)`
    width: 20.5rem;
    height: 3.5rem;
`

const TitleSignup = styled.p`
    width: 18.5rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 500;
    margin: 0 auto;
`

const DivArrowBack = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    height: 3rem;
`

const DivTitle = styled.div`
    height: 2.625rem;
`

function AddressPage (){
    return(
        <DivSignup>
            <DivArrowBack>
                <ArrowBackIosIcon cursor="pointer"/>
            </DivArrowBack>
            <hr/>
            <DivTitle>
                <TitleSignup>Meu endereço</TitleSignup>
            </DivTitle>
                <FormSignup  noValidate autoComplete="off">
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Logradouro"
                        placeholder="Rua / Av."
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Número"
                        placeholder="Número"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Bairro"
                        placeholder="Bairro"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Cidade"
                        placeholder="Cidade"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        label="Estado"
                        placeholder="Estado"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                    <ButtonCreate>Criar</ButtonCreate>
                </FormSignup>
        </DivSignup>
    )
}

export default AddressPage