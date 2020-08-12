import React from 'react'
import TextField from '@material-ui/core/TextField'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import useForm from '../useForm'


const DivSignup = styled.div`
    width: 22.5rem;
    height: 40rem;
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
    const history = useHistory();
    const baseURL ="https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/address"

    const { form, onChange } = useForm({
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        onChange(name, value);
      };

      const putAddress = () => {
        const token = window.localStorage.getItem('token');
        const body = {
            street: form.street,
            number: form.number,
            neighbourhood: form.neighbourhood,
            city: form.city,
            state: form.state,
            complement: form.complement
        }
        axios.put(`${baseURL}`,body,{headers: {auth:token}}).then((response) => {
            window.localStorage.setItem('novoToken', response.data.token)
            alert("Endereço criado com sucesso!")
            history.push(`/restaurant`);
        }).catch(()=> {
            alert("Erro ao cadastrar endereço!")
        })
      }

      const Back =() => {
          history.push('/sign-up')
      }

    return(
        <DivSignup>
            <DivArrowBack>
                <ArrowBackIosIcon cursor="pointer" onClick={Back}/>
            </DivArrowBack>
            <hr/>
            <DivTitle>
                <TitleSignup>Meu endereço</TitleSignup>
            </DivTitle>
                <FormSignup  noValidate autoComplete="off" onSubmit={putAddress}>
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="street"
                        value={form.street}
                        label="Logradouro"
                        placeholder="Rua / Av."
                        InputLabelProps={{
                            shrink: true,
                            parttern: "^.{5,}",
                            title:"Rua precisa ter no mínimo 5 caracteres"
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        type="number"
                        name="number"
                        value={form.number}
                        label="Número"
                        placeholder="Número"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        id="outlined-required"
                        name="complement"
                        value={form.complement}
                        label="Complemento"
                        placeholder="Apto. / Bloco"
                        InputLabelProps={{
                            shrink: true,
                            parttern: "^.{3,}",
                            title:"Complemento precisa ter no mínimo 3 caracteres"
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="neighbourhood"
                        value={form.neighbourhood}
                        label="Bairro"
                        placeholder="Bairro"
                        InputLabelProps={{
                            shrink: true,
                            parttern: "^.{3,}",
                            title:"Bairro precisa ter no mínimo 3 caracteres"
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="city"
                        value={form.city}
                        label="Cidade"
                        placeholder="Cidade"
                        InputLabelProps={{
                            shrink: true,
                            parttern: "^.{3,}",
                            title:"Cidade precisa ter no mínimo 3 caracteres"
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <TextFieldSignup
                        required
                        id="outlined-required"
                        name="state"
                        value={form.state}
                        label="Estado"
                        placeholder="Estado"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                    <ButtonCreate>Salvar</ButtonCreate>
                </FormSignup>
        </DivSignup>
    )
}

export default AddressPage