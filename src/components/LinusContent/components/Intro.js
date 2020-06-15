import React from 'react';
import Img from 'gatsby-image';
import { object } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledIntroContainer, StyledLinkButton } from './IntroStyles';
import { handleScrollDown } from '../../../utils/functions';

function Intro({ builtWithRef }) {
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
          During my time as a Software Engineer at Linus I've built and
          delivered interactive data visualizations, payment integrations,
          two-factor authentication, and complex user interfaces.
        </p>
        <StyledLinkButton
          href="https://app.getlinus.io/open"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </StyledLinkButton>
      </div>
      <Img
        fixed={img.mobileChart.childImageSharp.fixed}
        className="chartImage"
        loading="eager"
      />
      <button
        className="readMore"
        onClick={() => handleScrollDown(builtWithRef)}
      >
        Read More
      </button>
    </StyledIntroContainer>
  );
}

Intro.propTypes = {
  builtWithRef: object,
};

export default Intro;
