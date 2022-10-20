
import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {
  // At the initaial State the burger is not opened so it is set to false
  const [burgerStatus, setBurgerStatus] = useState(false)
  return (
   
    <Container>
        <a href='#'>
             <img src="/images/amazon-logo.png" />
             </a>
        <MenuGroup>
            <div > Model S</div>
            <div > Model Y</div>
            <div > Model Z</div>
        </MenuGroup>

        <RightMenu>
                <a href = "#">Shop</a> 
                <a href = "#">Tesla Account</a> 
                <MenuIconContainer onClick={() => setBurgerStatus(true)}>
                      <MenuIcon />
                  </MenuIconContainer>
        </RightMenu>

                <BurgerNav status = {burgerStatus}>
                  <CloseContainer  onClick={() => setBurgerStatus(false)}>
                  <Close />
                    </CloseContainer>
                 
                    <li> <a href = "#">Model S</a></li>
                    <li> <a href = "#">Model Y</a></li>
                    <li> <a href = "#">Model 3</a></li>
                    <li> <a href = "#">Model Z</a></li>
                  </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
display: flex;
min-height:60px;
align-items: center;
justify-content: space-between;
padding: 0 20px;
position: fixed;
top: 0;
left: 0;
right: 0;
`

const MenuGroup = styled.div`
display: flex;
text-transform:uppercase;
cursor:pointer;
div{
    font-weight:600;
    padding: 0 10px;
}`

const RightMenu  = styled.div`
display: flex;
align-items: center;
a{
    padding-right: 10px;
    font-weight: 10px;
}
`
const MenuIconContainer = styled.div`
  cursor:pointer;
`
const BurgerNav = styled.div`
position: fixed;
width: 300px;
background-color: white;
top: 0;
right: 0;
bottom: 0;
padding: 20px;
list-style:none;
transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
li{
  padding: 15px 0;
  border-bottom: 1px solid rgba(0, 0, 8, 21);
  font-weight: 600;
}
`
const CloseContainer = styled.div`
display: flex;
justify-content: flex-end;
`
const Close = styled(CloseIcon)`
cursor:pointer;
`
