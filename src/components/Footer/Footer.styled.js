import styled from 'styled-components';

export const StyledFooter = styled.footer`
    display: flex;
    width: 100%;
    height: 40vh;
    background-color: ${({ theme }) => theme.cardBackgroundColor};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: .3rem auto;
    }

`;