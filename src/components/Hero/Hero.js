import React from 'react';
import { useSelector } from 'react-redux';
import { useStaticQuery, graphql } from 'gatsby';

import { HeroContainer, StyledHero, StyledList, StyledImg } from './HeroStyles';

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

  const selfieSources = [
    data.selfie.childImageSharp.fixed,
    {
      ...data.selfieMobile.childImageSharp.fixed,
      media: '(max-width: 600px)',
    },
  ];

  return (
    <HeroContainer>
      <StyledHero>
        <StyledImg isHidden={isHidden} fixed={selfieSources} />
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
  'https://res.cloudinary.com/reactstore/image/upload/v1591036809/resume/aiello_resume_wet6ea.pdf';
