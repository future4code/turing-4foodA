import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import styled from 'styled-components'

const FooterContainer = styled.div`
    width: 22.5rem;
    height: 3.062rem;
    border: 1px solid #BDBDBD;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`

const HomeIconFooter = styled(HomeIcon)`
    color: #BDBDBD;
`

const ShoppingCartOutlinedIconFooter = styled(ShoppingCartOutlinedIcon)`
    color: #BDBDBD;
`

const PersonOutlineIconFooter = styled(PersonOutlineIcon)`
    color: #BDBDBD;
`

function Footer(props){
    return(
        <FooterContainer>
            <HomeIconFooter fontSize="large" cursor="pointer" color={props.color}/>
            <ShoppingCartOutlinedIconFooter color="disabled" fontSize="large" cursor="pointer"/>
            <PersonOutlineIconFooter color="disabled" fontSize="large" cursor="pointer"/>
        </FooterContainer>
    )
}

export default Footer