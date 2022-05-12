import React from 'react';

import SEO from '../components/SEO/SEO';
import Chart from '../components/Chart';
import TransitionSpring from '../components/TransitionSpring';

function ChartPage() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <TransitionSpring>
      <SEO title="Chart" />
      <Chart />
    </TransitionSpring>
  );
}

export default ChartPage;
