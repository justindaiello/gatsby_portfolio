import React from 'react';

import { StyledImageGrid, StyledLogo } from './BuiltWithStyles';

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
    <>
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
