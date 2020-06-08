import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { StyledImageGrid } from './BuiltWithStyles';

function BuiltWith() {
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
      <StyledImageGrid>
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
          <h2>Linus is a high-yield alternative to cash deposit accounts</h2>
          <p>Here are a few things I worked on:</p>
          <ul>
            <li>
              Implemented the design and logic for an interactive deposit chart
            </li>
            <li>
              Connected third party integrations for Stripe, Plaid and MapBox
            </li>
            <li>
              Added to and helped manage business logic for the front-end API
              client that interfaced with the back-end
            </li>
            <li>
              Built the two-factor authentication UI with scannable QR code
            </li>
            <li>
              Designed and implemented mobile responsiveness across the
              application
            </li>
            <li>Wrote unit and end-to-end tests with Jest and Cypress</li>
            <li>
              Worked with back-end engineers to connect new features to the
              front-end
            </li>
            <li>Added accessibility features throughout the application</li>
          </ul>
        </div>
      </StyledImageGrid>
    </>
  );
}

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
