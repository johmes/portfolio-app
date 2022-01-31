import styled from 'styled-components';

// top is defined based on values visible and open.
// if visible offset 1.5, else if open offset 1.5, else -5
export const StyledBurger = styled.button`
  position: fixed;
  top: ${({ visible, open }) => visible ? '1.5rem' : (open ? '1.5rem' : '-5rem')};
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  width: 2rem;
  height: 2rem;
  padding: 0;
  border: none;
  cursor: pointer;
  z-index: 12;
  transition: top .3s;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    opacity: 0;
  }

  @media (max-width: ${({ theme }) => theme.tablet}) {
    top: ${({ visible, open }) => visible ? '1rem' : (open ? '1rem' : '-4rem')};
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.colorPrimary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;


    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(-4px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`;