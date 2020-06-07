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
      </StyledImageGrid>
    </>
  );
}

export default BuiltWith;
