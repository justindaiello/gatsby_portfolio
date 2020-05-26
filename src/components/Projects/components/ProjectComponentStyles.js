import styled from 'styled-components';

const LinusAppDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 200px;

  .purple {
    background: #8581a3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LinusMarketingDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 200px;

  .yellow {
    background: #ecbf5b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const GoAdventureDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-rows: 200px;

  .green {
    background: #86aba3;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0rem 3rem;

  &:before {
    content: '';
    width: 2px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  &:after {
    height: 2px;
    background: ${(props) => handleUnderline(props.variant)};
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 1rem;

    @media (max-width: 700px) {
      background: none;
    }
  }

  &:hover,
  &:focus {
    outline: none;

    &:after {
      width: calc(100% - 60px);
    }
  }
`;

//dynamically render underline for links based on props.variant
function handleUnderline(variant) {
  switch (variant) {
    case 'purple': {
      return '#8581a3';
    }
    case 'yellow': {
      return '#ecbf5b';
    }
    case 'green': {
      return '#86aba3';
    }
    default: {
      return '#87b3c7';
    }
  }
}

export { LinusAppDiv, LinusMarketingDiv, GoAdventureDiv, ProjectLink };
