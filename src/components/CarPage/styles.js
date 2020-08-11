import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  .Bar {
    height: 4rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    .Carrier {
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
      height: 1.188rem;
      font-family: Roboto;
      font-size: 1rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: -0.39px;
      text-align: center;
      color: black;
      margin: 0 auto;
      padding: 1.95rem 5.75rem 0 5.813rem;
  }
}

main {
  .Rectangle {
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
    display: flex;
    justify-content: flex-start;
    margin: 1rem;
    padding-top: 1rem;
}
.endereco {
  width: 20.5rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem 0 1rem;
}
.text-car {
  width: 22.5rem;
  height: 2.625rem;
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
  color: black;
  margin: 0 auto;
  margin: 0.75rem 2rem;
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
  color: black;
  padding: 2rem 1.125rem 0 15rem;
  margin: 0;
}
.total {
  display: flex;
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
  color: black;
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
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
  color: #e8222e;
  padding-right: 1rem;
}
}

.pagamento {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 1rem;
  .forma-pagamento {
  height: 1.125rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding-top: 1.5rem;
}
.linha {
  width: 20.5rem;
  background: #030303;
  margin-right: 2rem;

  }
  .confirm {
    height: 2.625rem;
    border-radius: 2px;
    background-color: rgba(232, 34, 46, 0.5);
    border: none;
    margin-right: 1.5rem;
    margin-top: 4.063rem;
  }
}

`


export default GlobalStyle