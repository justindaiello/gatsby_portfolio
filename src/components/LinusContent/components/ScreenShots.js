import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledImgContainer } from './ScreenShotsStyles';

function ScreenShots() {
  const imgData = useStaticQuery(graphql`
    query AppImages {
      chartImage: file(relativePath: { eq: "Chart.png" }) {
        ...fluidImage
      }
      chartImageMobile: file(relativePath: { eq: "MobChart4x.png" }) {
        ...fluidImageMobile
      }
      activityImage: file(relativePath: { eq: "Activity.png" }) {
        ...fluidImage
      }
      activityImageMobile: file(relativePath: { eq: "MobActivity4x.png" }) {
        ...fluidImageMobile
      }
      settingsImage: file(relativePath: { eq: "Settings.png" }) {
        ...fluidImage
      }
      settingsImageMobile: file(relativePath: { eq: "MobSettings4x.png" }) {
        ...fluidImageMobile
      }
    }
  `);

  return (
    <StyledImgContainer>
      <Img
        fluid={imgData.chartImage.childImageSharp.fluid}
        className="appImage"
        loading="eager"
      />
      <Img
        fluid={imgData.activityImage.childImageSharp.fluid}
        className="appImage"
      />
      <Img
        fluid={imgData.settingsImage.childImageSharp.fluid}
        className="appImage"
      />
      <Img
        fluid={imgData.chartImageMobile.childImageSharp.fluid}
        className="appImageMobile"
        loading="eager"
      />
      <Img
        fluid={imgData.activityImageMobile.childImageSharp.fluid}
        className="appImageMobile"
      />
      <Img
        fluid={imgData.settingsImageMobile.childImageSharp.fluid}
        className="appImageMobile"
      />
    </StyledImgContainer>
  );
}

export default ScreenShots;

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(pngQuality: 100, maxWidth: 1200) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`;

export const fluidImageMobile = graphql`
  fragment fluidImageMobile on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 350) {
        ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize
      }
    }
  }
`;
