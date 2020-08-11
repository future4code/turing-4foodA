import React, {useState} from 'react';
import Logo from '../../Images/logo-future-eats-invert.svg'
import {ContainerLogin, LogoImg, TituloLogin, ContainerTitulo, StyledTextField, ContainerInputs, StyledButton, SignUpTitle, SignUpButton} from './styles'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useHistory } from "react-router-dom";

function LoginPage() {
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

  const goToProfileAdressPage = () => {
    history.push("/profile-page/edit/address")
  }

  const goToSignUpPage = () => {
    history.push("/sign-up")
  }

  return (
    <ContainerLogin>
      <LogoImg src={Logo} />
      <ContainerTitulo>
        <TituloLogin>Entrar</TituloLogin>
      </ContainerTitulo>
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
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            InputProps={{
              endAdornment: (
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
              )}}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            labelWidth={70}
            required
          />
      </ContainerInputs>
      <StyledButton onClick={goToProfileAdressPage}>Entrar</StyledButton>
      <SignUpTitle>Não possui cadastro? Clique <SignUpButton onClick={goToSignUpPage}>aqui.</SignUpButton></SignUpTitle>
    </ContainerLogin>
  );
}

export default LoginPage;
