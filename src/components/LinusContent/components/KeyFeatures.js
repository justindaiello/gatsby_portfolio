import React from 'react';

import {
  StyledFeaturesContainer,
  CardIcon,
  MoneyIcon,
  HomeIcon,
  ChartIcon,
} from './KeyFeaturesStyles';

function KeyFeatures() {
  return (
    <StyledFeaturesContainer>
      <h1>Key Features</h1>
      <div className="featureGrid">
        {gridContent.map((item) => (
          <div className="gridItem" key={item.header}>
            <h2>
              {item.icon}
              {item.header}
            </h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </StyledFeaturesContainer>
  );
}

export default KeyFeatures;

const gridContent = [
  {
    header: 'Recurring Deposit',
    content: 'Some super cool copy about this feature',
    icon: <CardIcon size={60} />,
  },
  {
    header: 'Withdraw',
    content: 'Some super cool copy about this feature',
    icon: <MoneyIcon size={60} />,
  },
  {
    header: 'Settings',
    content: 'Some super cool copy about this feature',
    icon: <HomeIcon size={60} />,
  },
  {
    header: 'Activity',
    content: 'Some super cool copy about this feature',
    icon: <ChartIcon size={60} />,
  },
];
