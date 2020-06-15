import React from 'react';
import Img from 'gatsby-image';
import { object } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledImageGrid } from './BuiltWithStyles';

function BuiltWith({ builtWithRef }) {
  const imgData = useStaticQuery(graphql`
    query LogoImages {
      jsImage: file(relativePath: { eq: "JS4x.png" }) {
        ...fixedImage
      }
      reactImage: file(relativePath: { eq: "React4x.png" }) {
        ...fixedImage
      }
      reduxImage: file(relativePath: { eq: "Redux4x.png" }) {
        ...fixedImage
      }
      tsImage: file(relativePath: { eq: "TS4x.png" }) {
        ...fixedImage
      }
      gitLabImage: file(relativePath: { eq: "Gitlab4x.png" }) {
        ...fixedImage
      }
      cyImage: file(relativePath: { eq: "Cypress4x.png" }) {
        ...fixedImage
      }
      jestImage: file(relativePath: { eq: "Jest4x.png" }) {
        ...fixedImage
      }
    }
  `);

  return (
    <>
      <StyledImageGrid ref={builtWithRef}>
        <div className="logos">
          {Object.entries(imgData).map(([key, value]) => (
            <Img
              fixed={value.childImageSharp.fixed}
              key={key}
              className="img"
            />
          ))}
        </div>
        <hr className="mobileDivider" />
        <div className="info">
          <h1>Tech Stack</h1>
          <p>
            The front end of Linus is built using JavaScript, React, Redux,
            TypeScript, and PostCSS. End-to-end and unit test coverage are
            written using Cypress and Jest and the repository is hosted on
            GitLab. Linus' front end also leverages React's hooks API to manage
            stateful logic, Redux Toolkit to enforce Redux best practices, Immer
            to manage immutable state, and React Spring to create animations and
            transitions.
          </p>
        </div>
      </StyledImageGrid>
    </>
  );
}

BuiltWith.propTypes = {
  builtWithRef: object,
};

export default BuiltWith;

export const fixedImage = graphql`
  fragment fixedImage on File {
    id
    childImageSharp {
      fixed(quality: 100, height: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
