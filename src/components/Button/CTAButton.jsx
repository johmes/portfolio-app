import React from 'react';
import { ButtonWrapper, Button } from './CTAButton.styled';
import { NavLink } from '../Menu/Menu.styled';

const CTAButton = ({ target }) => {
    const whereTo = target ? target : ''

    return (
        <div>
            <ButtonWrapper aria-label="Call to action button">
                <Button primary>
                    <NavLink to={whereTo} spy={true} smooth={true} offset={0} duration={100}>
                        Read More
                    </NavLink>
                </Button>
            </ButtonWrapper>
        </div>
    )
}

export default CTAButton;