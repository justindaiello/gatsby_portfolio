import styled from 'styled-components';
import { handleUnderline } from '../../../utils/functions';

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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
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

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AprToApyDiv = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  grid-template-rows: 200px;

  .red {
    background: #c25b56;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioDiv = styled.div`
  display: grid;
  grid-template-columns: 60% auto;
  grid-template-rows: 200px;

  .blue {
    background: ${(props) => props.theme.accent};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DataVisDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 200px;

  .purple {
    background: #8581a3;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  font-size: 1.75rem;
  font-weight: 500;
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
    bottom: 0;

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

  @media (max-width: 700px) {
    &:focus {
      outline: 2px solid ${(props) => handleUnderline(props.variant)};
    }

    &:after {
      background: none;
    }
  }
`;

export {
  DataVisDiv,
  LinusAppDiv,
  ProjectLink,
  AprToApyDiv,
  PortfolioDiv,
  GoAdventureDiv,
  LinusMarketingDiv,
};
