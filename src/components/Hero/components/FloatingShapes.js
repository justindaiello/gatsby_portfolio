import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../../SVG';
import { Triangle, Circle, Square, HarryPotter } from '../../SVG/shapes';

function FloatingShapes({ isHidden }) {
  return (
    <>
      <SVG
        viewBox="0 0 30 30"
        top="20%"
        left="45%"
        width="60px"
        color="#ecbf5b"
        isHidden={!isHidden}
        animation="long"
      >
        <Square />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="65%"
        left="75%"
        width="140px"
        color="#ecbf5b"
        animation="medium"
      >
        <Square strokeWidth="0.5" />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="55%"
        left="36%"
        width="60px"
        color="#87B3C7"
        isHidden={!isHidden}
      >
        <Square />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="36%"
        left="18%"
        width="120px"
        animation="medium"
      >
        <Triangle strokeWidth="0.5" />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#8581a3"
        top="50%"
        left="70%"
        width="40px"
        isHidden={!isHidden}
      >
        <Triangle />
      </SVG>
      <SVG viewBox="0 0 30 30" top="10%" left="72%" width="150px">
        <Circle r={10} cy={10} cx={10} />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#c25b56"
        top="80%"
        left="25%"
        width="85px"
        animation="long"
      >
        <Circle r={10} cy={10} cx={10} />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#86aba3"
        top="15%"
        left="30%"
        width="120px"
      >
        <Circle r={10} cy={10} cx={10} />
      </SVG>
      <SVG
        height="250px"
        viewBox="0 0 200 100"
        top="50%"
        left="48%"
        color="#86aba3"
        animation="medium"
      >
        <HarryPotter />
      </SVG>
      <SVG
        color="#8581a3"
        top="0"
        left="5%"
        height="150px"
        viewBox="0 0 200 100"
      >
        <HarryPotter />
      </SVG>
      <SVG
        color="#c25b56"
        top="15%"
        left="82%"
        height="150px"
        viewBox="0 0 200 100"
        animation="long"
      >
        <HarryPotter />
      </SVG>

      <SVG
        color="#c25b56"
        top="60%"
        left="45%"
        height="150px"
        viewBox="0 0 200 100"
        isMobile
      >
        <HarryPotter />
      </SVG>
      <SVG
        color="#87b3c7"
        top="20%"
        left="-12%"
        height="150px"
        viewBox="0 0 200 100"
        animation="medium"
        isMobile
        isHidden={!isHidden}
      >
        <HarryPotter />
      </SVG>
      <SVG viewBox="0 0 30 30" top="8%" left="10%" width="60px" isMobile>
        <Triangle strokeWidth="0.5" />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="50%"
        left="50%"
        width="60px"
        color="#8581a3"
        isMobile
        isHidden={!isHidden}
      >
        <Triangle strokeWidth="0.5" />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        top="72%"
        left="5%"
        width="60px"
        color="#ecbf5b"
        isMobile
      >
        <Square />
      </SVG>
      <SVG
        viewBox="0 0 30 30"
        color="#86aba3"
        top="18%"
        left="78%"
        width="80px"
        isMobile
        animation="long"
      >
        <Circle r={10} cy={10} cx={10} />
      </SVG>
    </>
  );
}

FloatingShapes.propTypes = {
  isHidden: PropTypes.bool,
};

export default FloatingShapes;
