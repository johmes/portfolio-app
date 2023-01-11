import React from 'react';
import { StyledFooter } from './Footer.styled.js';

export default function Footer() {
  return (
      <StyledFooter>
          <ul>
              <li><a href="https://github.com/johmes">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/johannes-mensalo-575b7b203/">LinkedIn</a></li>
              <li><a href="./files/CV_JOHANNES_MENSALO.pdf" download>Download CV</a></li>
          </ul>
          <p>Designed & Created by <span>Johannes Mensalo</span></p>
      </StyledFooter>
  );
}
