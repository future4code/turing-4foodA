import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import styled from 'styled-components'
import { useHistory } from "react-router-dom";

const FooterContainer = styled.div`
    height: 3.062rem;
    border-top: 1px solid #BDBDBD;
    border-bottom: 1px solid #BDBDBD;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

const HomeIconFooter = styled(HomeIcon)`
    color: #BDBDBD;
    :hover{
        color:red;
    }
`

const ShoppingCartOutlinedIconFooter = styled(ShoppingCartOutlinedIcon)`
    color: #BDBDBD;
`

const PersonOutlineIconFooter = styled(PersonOutlineIcon)`
    color: #BDBDBD;
`

function Footer(props){
    const history = useHistory();

    const goToRestaurantPage = () => {
        history.push("/restaurant")
    }

    const goToCarPage = () => {
        history.push("/car")
    }

    const goToProfilePage = () => {
        history.push("/profile-page")
    }

    return(
        <FooterContainer>
            <HomeIconFooter fontSize="large" cursor="pointer" color={props.color} onClick={goToRestaurantPage}/>
            <ShoppingCartOutlinedIconFooter color="disabled" fontSize="large" cursor="pointer" onClick={goToCarPage}/>
            <PersonOutlineIconFooter color="disabled" fontSize="large" cursor="pointer" onClick={goToProfilePage}/>
        </FooterContainer>
    )
}

export default Footer