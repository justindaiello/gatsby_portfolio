import React from 'react';
import { StyledHero, StyledList } from './HeroStyles';

function Hero({ isHidden }) {
  return (
    <div style={{ height: '100vh' }}>
      <StyledHero>
        <h1>Justin Aiello</h1>
        {!isHidden && (
          <>
            <h2>Software Engineer | Asheville, NC</h2>
            <StyledList>
              <li>
                <a
                  href="https://github.com/justindaiello"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jdaiello/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://docs.google.com/document/d/1_FT1aUWIKau8MC4-LyG80AAVUx3IGFc-KW6bKx0i23Q/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="mailto:justinaiello@gmail.com?Subject=Hello"
                  target="_top"
                >
                  Email
                </a>
              </li>
            </StyledList>
          </>
        )}
      </StyledHero>
    </div>
  );
}

export default Hero;
