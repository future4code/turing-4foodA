import React, { useState } from 'react';
import styled from 'styled-components';

import edit from './../../Images/edit.svg';

const ContainerProfile = styled.div `
    background-color: #fff;
    font-family: 'Roboto';
    font-size: 1rem;
`;

const ContainerUser = styled.div `
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 1rem;
`;

const UserData = styled.div `

`;

const UserInfo = styled.p `
    margin: 0.5rem 0;
`;

const ContainerAddress = styled.div `
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
`;

const IconEdit = styled.div `
    align-self: flex-start;
`;

const IconEditAddress = styled.div `
    align-self: center;
`;

const AddressData = styled.div `

`;

const AddressTitle = styled.p `
    margin-bottom: 0;
    color: #b8b8b8;
`;

const Address = styled.p `
    width: 90%;
`;

const DateOrder = styled.div `
    padding: 0 1rem;
`;

const OrderInfo = styled.div `
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    padding: 1rem;
`;

const TitleOrder = styled.p `
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.29px;
    margin-bottom: 10px;
    color: #e8222e;
`;

const DateBuy = styled.p `
    margin: 0;
    font-size: 0.75rem;
    letter-spacing: -0.39px;
    margin-bottom: 10px;
`;

const PriceOrder = styled.p `
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: -0.29px;
`;

const TitleHistoryOrder = styled.p `
    margin: 1rem 0.5rem 0;
`;

const Line = styled.hr `
`;

function ProfilePage() {
    const [profile, setProfile] = useState(
    {
        id: "jMpvdFHbysmolONQMnF1",
        name: "Hyago",
        email: "hyago@gmail.com",
        cpf: "123.123.123-12",
        hasAddress: true,
        address: "R. Afonso Braz, 177, 71 - Vila N. Conceição"
    })

    const [historyOrder, setHistoryOrder] = useState({
        "totalPrice": 37,
        "restaurantName": "Habibs",
        "createdAt": 1597084288573,
        "expiresAt": 1597087888573
    })
    
    const date = new Date(historyOrder.createdAt);
    const [weekDay, month, day, year, time] = date.toString().split(" ");

    
    const monthTranslate = () => {
        switch(month) {
            case 'Jan':
                return 'Janeiro';
            break;
            case 'Feb':
                return 'Fevereiro';
            break;
            case 'Mar':
                return 'Março';
            break;
            case 'Apr':
                return 'Abril';
            break;
            case 'May':
                return 'Maio';
            break;
            case 'Jun':
                return 'Junho';
            break;
            case 'Jul':
                return 'Julho';
            break;
            case 'Aug':
                return 'Agosto';
            break;
            case 'Sep':
                return 'Setembro';
            break;
            case 'Oct':
                return 'Outubro';
            break;
            case 'Nov':
                return 'Novembro';
            break;
            case 'Dec':
                return 'Dezembro';
            break;
        }
    }

  return (
    <ContainerProfile>
        <ContainerUser>
            <UserData>
                <UserInfo>{profile.name}</UserInfo>
                <UserInfo>{profile.email}</UserInfo>
                <UserInfo>{profile.cpf}</UserInfo>
            </UserData>
            <IconEdit>
                <p><img src={edit} /></p>
            </IconEdit>
        </ContainerUser>
        <ContainerAddress>
            <AddressData>
                <AddressTitle>Endereço cadastrado</AddressTitle>
                <Address>{profile.address}</Address>
            </AddressData>
            <IconEditAddress>
                <p><img src={edit} /></p>
            </IconEditAddress>
        </ContainerAddress>
        <DateOrder>
            <TitleHistoryOrder>Histórico de pedidos</TitleHistoryOrder>
            <Line/>
            <OrderInfo>
                <TitleOrder>{historyOrder.restaurantName}</TitleOrder>
                <DateBuy>{`${day} ${monthTranslate()} ${year}`}</DateBuy>
                <PriceOrder>SUBTOTAL R${historyOrder.totalPrice.toFixed(2)}</PriceOrder>
            </OrderInfo>

        </DateOrder>
    </ContainerProfile>
  );
}

export default ProfilePage;
