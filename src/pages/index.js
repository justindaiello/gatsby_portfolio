import React from 'react';

import Hero from '../components/Hero';
import Header from '../components/Header';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => {
  const [isHidden, setIsHidden] = React.useState(true);

  return (
    <PrimaryLayout>
      <Header setIsHidden={setIsHidden} isHidden={isHidden} />
      <Hero isHidden={isHidden} />
    </PrimaryLayout>
  );
};
