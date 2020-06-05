import React from 'react';

import { StyledImageGrid, StyledLogo, StyledInfoDiv } from '../LinusStyles';

import Gitlab from '../../../images/Gitlab.png';
import Gitlab4x from '../../../images/Gitlab4x.png';
import JS from '../../../images/JS.png';
import JS4x from '../../../images/JS4x.png';
import ReactImg from '../../../images/React.png';
import ReactImg4x from '../../../images/React4x.png';
import Redux from '../../../images/Redux.png';
import Redux4x from '../../../images/Redux4x.png';
import TS from '../../../images/TS.png';
import TS4x from '../../../images/TS4x.png';
import Cypress from '../../../images/Cypress.png';
import Cypress4x from '../../../images/Cypress4x.png';
import Jest from '../../../images/Jest.png';
import Jest4x from '../../../images/Jest4x.png';
import Chart from '../../../images/Chart.png';
import Chart4x from '../../../images/Chart4x.png';
import Activity from '../../../images/Activity.png';
import Activity4x from '../../../images/Activity4x.png';
import Settings from '../../../images/Settings.png';
import Settings4x from '../../../images/Settings4x.png';
import MobileChart from '../../../images/MobileChart.png';
import MobileChart4x from '../../../images/MobileChart4x.png';
import MobileActivity from '../../../images/MobileActivity.png';
import MobileActivity4x from '../../../images/MobileActivity4x.png';
import MobileSettings from '../../../images/MobileSettings.png';
import MobileSettings4x from '../../../images/MobileSettings4x.png';

const images = [
  { id: 1, src: JS, srcSet: `${JS} 1x, ${JS4x} 4x`, alt: 'JavaScript' },
  {
    id: 2,
    src: ReactImg,
    srcSet: `${ReactImg} 1x, ${ReactImg4x} 4x`,
    alt: 'React',
  },
  {
    id: 3,
    src: Redux,
    srcSet: `${Redux} 1x, ${Redux4x} 4x`,
    alt: 'Redux',
  },
  {
    id: 4,
    src: TS,
    srcSet: `${TS} 1x, ${TS4x} 4x`,
    alt: 'TypeScript',
  },
  {
    id: 5,
    src: Gitlab,
    srcSet: `${Gitlab} 1x, ${Gitlab4x} 4x`,
    alt: 'Gitlab',
  },
  {
    id: 6,
    src: Cypress,
    srcSet: `${Cypress} 1x, ${Cypress4x} 4x`,
    alt: 'Cypress',
  },
  {
    id: 7,
    src: Jest,
    srcSet: `${Jest} 1x, ${Jest4x} 4x`,
    alt: 'Jest',
  },
];

function BuiltWith() {
  return (
    <StyledImageGrid>
      <div className="logos">
        <h2>Front-end built with:</h2>
        {images.map((image) => (
          <StyledLogo
            src={image.src}
            srcSet={image.srcSet}
            alt={image.alt}
            key={image.id}
          />
        ))}
      </div>
      <img
        src={Chart}
        srcSet={`${Chart} 1x, ${Chart4x} 4x`}
        alt="Linus Deposit Chart"
        className="image"
      />
      <img
        src={MobileChart}
        srcSet={`${MobileChart} 1x, ${MobileChart4x} 4x`}
        alt="Linus Deposit Chart Mobile"
        className="mobileImage"
      />
      <img
        src={Activity}
        srcSet={`${Activity} 1x, ${Activity4x} 4x`}
        alt="Linus Activity"
        className="image"
      />
      <img
        src={MobileActivity}
        srcSet={`${MobileActivity} 1x, ${MobileActivity4x} 4x`}
        alt="Linus Activity Mobile"
        className="mobileImage"
      />
      <StyledInfoDiv left>
        <p>Linus is an alternative to traditional cash deposit accounts.</p>
      </StyledInfoDiv>
      <StyledInfoDiv>
        <p>Here is some more info</p>
      </StyledInfoDiv>
      <img
        src={Settings}
        srcSet={`${Settings} 1x, ${Settings4x} 4x`}
        alt="Linus Settings"
        className="image"
      />
      <img
        src={MobileSettings}
        srcSet={`${MobileSettings} 1x, ${MobileSettings4x} 4x`}
        alt="Linus Settings Mobile"
        className="mobileImage"
      />
    </StyledImageGrid>
  );
}

export default BuiltWith;
