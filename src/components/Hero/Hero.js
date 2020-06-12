import React from 'react';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { HeroContainer, StyledHero, StyledList, StyledImg } from './HeroStyles';
import SVG from '../SVG';
import { Triangle, Circle, Square, HarryPotter } from '../SVG/shapes';

function Hero() {
  const { isHidden } = useSelector((state) => state);

  const data = useStaticQuery(graphql`
    query Image {
      selfie: file(relativePath: { eq: "Justin4x.png" }) {
        id
        childImageSharp {
          fixed(pngQuality: 100, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      selfieMobile: file(relativePath: { eq: "Justin4x.png" }) {
        id
        childImageSharp {
          fixed(pngQuality: 100, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HeroContainer>
      <SVG
        viewBox="0 0 30 30"
        top="20%"
        left="45%"
        width="60px"
        color="#ecbf5b"
        isHidden={!isHidden}
      >
        <Square />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="65%"
        left="75%"
        width="140px"
        color="#ecbf5b"
      >
        <Square />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="55%"
        left="38%"
        width="60px"
        color="#87B3C7"
        isHidden={!isHidden}
      >
        <Square />
      </SVG>
      <SVG viewBox="0 0 30 30" top="36%" left="22%" width="120px">
        <Triangle />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#8581a3"
        top="50%"
        left="70%"
        width="40px"
        long
        isHidden={!isHidden}
      >
        <Triangle />
      </SVG>
      <SVG viewBox="0 0 30 30" top="10%" left="72%" width="150px">
        <Circle r={10} cy={10} cx={10} />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#c25b56"
        top="80%"
        left="25%"
        width="85px"
        long
      >
        <Circle r={10} cy={10} cx={10} />
      </SVG>
      <SVG
        height="250px"
        viewBox="0 0 200 100"
        long
        top="50%"
        left="48%"
        color="#86aba3"
      >
        <HarryPotter />
      </SVG>
      <SVG
        color="#8581a3"
        top="0"
        left="5%"
        height="150px"
        viewBox="0 0 200 100"
        long
      >
        <HarryPotter />
      </SVG>
      <SVG
        color="#c25b56"
        top="15%"
        left="82%"
        height="150px"
        viewBox="0 0 200 100"
        long
      >
        <HarryPotter />
      </SVG>
      <StyledHero>
        <figure className="desktopSelfie">
          <StyledImg
            fixed={data.selfie.childImageSharp.fixed}
            isHidden={isHidden}
          />
        </figure>
        <figure className="mobileSelfie">
          <StyledImg
            fixed={data.selfieMobile.childImageSharp.fixed}
            isHidden={isHidden}
          />
        </figure>
        <h1>Justin Aiello</h1>
        {!isHidden && (
          <>
            <p>
              Hi! I'm a Software Engineer residing in Asheville, NC. I love to
              create pixel-perfect user interfaces leveraging JavaScript, React,
              TypeScript and GraphQL.
            </p>
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
                <a href={resumeLink} rel="noopener noreferrer" target="_blank">
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
    </HeroContainer>
  );
}

export default Hero;

const resumeLink =
  'https://res.cloudinary.com/reactstore/image/upload/v1591881539/resume/aiello_resume_xdjt0i.pdf';
