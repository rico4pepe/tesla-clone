
import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';


function Header() {
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
                <MenuIconContainer>
                      <MenuIcon />
                  </MenuIconContainer>
        </RightMenu>
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