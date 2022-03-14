import React,{useState} from 'react'
import {FaMagento} from 'react-icons/fa'
import {FaBars, FaTimes} from 'react-icons/fa'
import {
    Nav, 
    NavContainer,  
    LogoHold,  
    MobileIcon,
    NavBar,
    NavLinks 
} 
    from './NavBar.Element'

function Navbar() {
    const [click, setClick] = useState(false);

    const handClick = () => {
        setClick(!click)
    }
  return (
    <>
    <Nav>
        <NavContainer>
            <LogoHold>
                <FaMagento />LSETF
            </LogoHold>

            <MobileIcon onClick={handClick}>
                {click ?<FaTimes />:<FaBars />}
            </MobileIcon>
            <NavBar onClick={handClick} click={click}>
                <NavLinks>Home</NavLinks>
                <NavLinks>Contact</NavLinks>
                <NavLinks>Services</NavLinks>
                <NavLinks>Blog</NavLinks>

            </NavBar>
           
        </NavContainer>
    </Nav>
    
    </>     
    
  )
}

export default Navbar