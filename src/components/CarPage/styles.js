import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .Bar {
    width: 22.5rem;
    height: 4rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
      .Mobile-Signal {
      width: 1.031rem;
      height: 0.625rem;
      border-radius: 1px;
      background-color: var(--black);
    }
    .Carrier {
    width: 2.5rem;
    height: 0.875rem;
    font-family: SFProText;
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #030303;
    }
    .title {
    width: 5.688rem;
    height: 1.188rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: var(--black);
    margin: 0 auto;
  }
}

main {
  .Rectangle {
  width: 22.5rem;
  height: 4.75rem;
  background-color: #eeeeee;
  }
  .Endereco-de-entrega {
  width: 20.5rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
}
.Text {
  width: 18.5rem;
  height: 1.125rem;
  opacity: 0.89;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  margin: 0 auto;
}
.Frete {
  width: 6.5rem;
  height: 1.125rem;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: var(--black);
}
.SUBTOTAL {
  width: 10.25rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
}
.R0000 {
  width: 10.25rem;
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.43px;
  text-align: right;
  color: var(--lipstick);
}
.confirm {
  width: 20.5rem;
  height: 2.625rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: var(--black);
  border-radius: 2px;
  background-color: rgba(232, 34, 46, 0.5);
  border: none;
}
}
`


export default GlobalStyle