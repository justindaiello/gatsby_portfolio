import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledIntroContainer, StyledLinkButton } from './IntroStyles';

function Intro() {
  const img = useStaticQuery(graphql`
    query MobileImage {
      mobileChart: file(relativePath: { eq: "iphoneWhite.png" }) {
        childImageSharp {
          fixed(quality: 100, height: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledIntroContainer>
      <div className="left">
        <h1>Linus App</h1>
        <h2>Linus is a high-yield alternative to cash deposit accounts.</h2>
        <p>
          some super cool content will go here that describes something cool for
          but now it just needs to be some filler space ok cool bye
        </p>
        <StyledLinkButton
          href="https://app.getlinus.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </StyledLinkButton>
      </div>
      <Img
        fixed={img.mobileChart.childImageSharp.fixed}
        className="chartImage"
      />
    </StyledIntroContainer>
  );
}

export default Intro;
