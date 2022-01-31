import styled from 'styled-components';

export const ButtonWrapper = styled.section`
    background-color: transparent;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    border-radius: 20px;
    color: ${({ theme }) => theme.primaryDark};
    background-color: ${({ theme }) => theme.colorPrimary};
    font-weight: ${({ theme }) => theme.fontMedium};
    font-size: ${({ theme, secondary }) => secondary ? theme.smallTextFont : theme.mediumTextFont};
    padding: 18px 30px;
    outline: none;
    cursor: pointer;
    border: none;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
  ;

    &:hover{
        transition: all .2s linear;
        color: ${({ theme }) => theme.primaryDark};
        background-color: ${({ theme }) => theme.primaryLight};
        transform: translateY(-.2rem) scale(1.01);
    
    }
`;