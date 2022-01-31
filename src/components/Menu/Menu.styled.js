import styled from 'styled-components';
import { Link } from "react-scroll";

export const NavBar = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  top: ${({ visible }) => visible ? '0' : '-5rem'};
  height: 5rem;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  transition: top .3s;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    height: 4rem;
  }


`;

export const NavLink = styled(Link)`
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: .2rem;
  color: ${({ theme }) => theme.primaryLight};
  text-decoration: none;
  text-align: center;
  margin: 0 1.5rem;
  cursor: pointer;

  span {
    opacity: 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    transition: color .3s linear;
    color: ${({ theme }) => theme.primaryDark};
    font-size: 1rem;
    padding: 1.5rem 0;

    span {
      opacity: 1;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.primaryHover};
  }

  h1 {
    font-size: ${({ theme }) => theme.smallTextFont};
    color: ${({ theme }) => theme.colorPrimary};
    letter-spacing: .4rem;
    text-align: center;
    margin: 0 auto;
    transition: .2s linear;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      font-size: ${({ theme }) => theme.mediumTextFont};
    }

  }

`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 2rem;
    margin: 0;
    flex-direction: column;
    transition: transform .3s ease-in;
    background: ${({ theme }) => theme.primaryLight};
    opacity: ${({ open }) => open ? '1' : '0'};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    z-index: 11;
    
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  @keyframes fadeout {
    0% { opacity:0; }
    66% { opacity:0; }
    100% { opacity:1; }
}
`;