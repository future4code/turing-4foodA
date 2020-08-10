import React, {useState} from 'react';
import { ContainerLogin, LogoImg, ContainerTitulo, TituloLogin, ContainerInputs, StyledTextField, StyledOutlinedInput, StyledButton, ReturnButton, ButtonContainer} from './styles'
import Logo from '../../Images/logo-future-eats-invert.svg'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router-dom";

function SinupPage() {
  const history = useHistory();
  const [values, setValues] = useState({showPassword: false})
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const goToLoginPage = () => {
    history.push("/login")
  }
  return (
    <ContainerLogin>
      <ButtonContainer>
        <ReturnButton onClick={goToLoginPage}> <ArrowBackIosIcon/> </ReturnButton>
      </ButtonContainer>        
      <LogoImg src={Logo} />
      <ContainerTitulo>
        <TituloLogin>Cadastrar</TituloLogin>
      </ContainerTitulo>
      <ContainerInputs>
        <StyledTextField 
          label="Nome"
          placeholder="Nome e sobrenome"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
        <StyledTextField 
          label="E-mail"
          placeholder="email@email.com"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
        <StyledTextField 
          label="CPF"
          placeholder="000.000.000-00"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
      </ContainerInputs>
      <ContainerInputs>
        <FormControl variant="outlined">
          <InputLabel required >Senha</InputLabel>
          <StyledOutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            required
          />
        </FormControl>
      </ContainerInputs>
      <ContainerInputs>
        <FormControl variant="outlined" >
          <InputLabel required >Confirmar</InputLabel>
          <StyledOutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            label="Senha"
            placeholder="Confirme a senha anterior"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            required
          />
        </FormControl>
      </ContainerInputs>
      <StyledButton>Criar</StyledButton>
    </ContainerLogin>
  );
}

export default SinupPage;