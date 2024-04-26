import React from 'react';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { HeroContainer, StyledHero, StyledList, StyledImg } from './HeroStyles';
import FloatingShapes from './components/FloatingShapes';

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
      <FloatingShapes isHidden={isHidden} />
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
              and TypeScript.
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
  'https://res.cloudinary.com/reactstore/image/upload/v1714160149/resume_no_phone_tefwao.pdf';
