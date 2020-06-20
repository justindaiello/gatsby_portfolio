import React from 'react';

import SEO from '../components/SEO/SEO';
import Chart from '../components/Chart';
import TransitionSpring from '../components/TransitionSpring';

function ChartPage() {
  return (
    <TransitionSpring>
      <SEO title="Chart" />
      <Chart />
    </TransitionSpring>
  );
}

export default ChartPage;
