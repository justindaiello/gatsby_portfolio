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
      chartImageMobile: file(relativePath: { eq: "MobileChart.png" }) {
        id
        childImageSharp {
          fixed(height: 800, pngQuality: 100) {
            ...GatsbyImageSharpFixed
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
          fixed(height: 800, pngQuality: 100) {
            ...GatsbyImageSharpFixed
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
      settingsImageMobile: file(relativePath: { eq: "MobileSettings.png" }) {
        id
        childImageSharp {
          fixed(height: 800, pngQuality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  // const chartSources = [
  //   imgData.chartImage.childImageSharp.fluid,
  //   {
  //     ...imgData.chartImageMobile.childImageSharp.fluid,
  //     media: '(max-width: 999px)',
  //   },
  // ];

  // const activitySources = [
  //   imgData.activityImage.childImageSharp.fluid,
  //   {
  //     ...imgData.activityImageMobile.childImageSharp.fluid,
  //     media: '(max-width: 999px)',
  //   },
  // ];

  // const settingsSources = [
  //   imgData.settingsImage.childImageSharp.fluid,
  //   {
  //     ...imgData.settingsImageMobile.childImageSharp.fluid,
  //     media: '(max-width: 999px)',
  //   },
  // ];

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
        fixed={imgData.chartImageMobile.childImageSharp.fixed}
        className="appImageMobile"
        loading="eager"
      />
      <Img
        fixed={imgData.activityImageMobile.childImageSharp.fixed}
        className="appImageMobile"
      />
      <Img
        fixed={imgData.settingsImageMobile.childImageSharp.fixed}
        className="appImageMobile"
      />
    </StyledImgContainer>
  );
}

export default ScreenShots;
