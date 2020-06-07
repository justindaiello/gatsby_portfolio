import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { StyledImgContainer } from './ScreenShotsStyles';

function ScreenShots() {
  const imgData = useStaticQuery(graphql`
    query AppImages {
      chartImage: file(relativePath: { eq: "Chart.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      chartImageMobile: file(relativePath: { eq: "MobileChart4x.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 375) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      activityImage: file(relativePath: { eq: "Activity.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      activityImageMobile: file(relativePath: { eq: "MobileActivity.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 375) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsImage: file(relativePath: { eq: "Settings.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      settingsImageMobile: file(relativePath: { eq: "MobileSettings4x.png" }) {
        id
        childImageSharp {
          fluid(pngQuality: 100, maxWidth: 375) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const chartSources = [
    {
      ...imgData.chartImage.childImageSharp.fluid,
      media: '(min-width: 1000px)',
    },
    {
      ...imgData.chartImageMobile.childImageSharp.fluid,
      media: '(max-width: 999px)',
    },
  ];

  const activitySources = [
    {
      ...imgData.activityImage.childImageSharp.fluid,
      media: '(min-width: 1000px)',
    },
    {
      ...imgData.activityImageMobile.childImageSharp.fluid,
      media: '(max-width: 999px)',
    },
  ];

  const settingsSources = [
    {
      ...imgData.settingsImage.childImageSharp.fluid,
      media: '(min-width: 1000px)',
    },
    {
      ...imgData.settingsImageMobile.childImageSharp.fluid,
      media: '(max-width: 999px)',
    },
  ];

  return (
    <StyledImgContainer>
      <Img fluid={chartSources} className="appImage" loading="eager" />
      <Img fluid={activitySources} className="appImage" />
      <Img fluid={settingsSources} className="appImage" />
    </StyledImgContainer>
  );
}

export default ScreenShots;
