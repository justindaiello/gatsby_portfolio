import React from 'react';

import AnimatedLink from '../../AnimatedLink';
import { DataVisDiv } from './ProjectComponentStyles';

function DataVis() {
  return (
    <DataVisDiv>
      <div className="matchBody" />
      <div className="purple">
        <AnimatedLink to="/chart" text="Data Visualization" />
      </div>
    </DataVisDiv>
  );
}

export default DataVis;
