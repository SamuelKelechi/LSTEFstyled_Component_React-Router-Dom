import styled from 'styled-components';

export const Nav = styled.nav`
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 80px;
background-color: #101522;
color: #fff;
align-items: center;
font-size: 25px;
`

export const LogoHold = styled.div`
margin-left: 20px;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 850px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
}
`
export const NavBar = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 850px){
    display: flex;
    flex-direction: column;
    position: absolute;
    top:50px;
    height: 80vh;
    justify-content: flex-start;
    width: 100%;
    background: #101522;
    left: ${({click}) => (click? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
}
`

export const NavLinks = styled.li`
font-size: 18px;

`