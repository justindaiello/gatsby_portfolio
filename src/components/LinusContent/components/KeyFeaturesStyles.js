import styled from 'styled-components';
import {
  CreditCard,
  DollarCircle,
  Home,
  LineChart,
} from '@styled-icons/boxicons-regular';

const CardIcon = styled(CreditCard)`
  color: ${(props) => props.theme.accent};
  margin-right: 2rem;
  /* position: absolute; */
  /* left: -80px; */
  /* top: 10px; */
`;

const MoneyIcon = styled(DollarCircle)`
  color: ${(props) => props.theme.accent};
  margin-right: 2rem;
  /* position: absolute; */
  /* left: -80px; */
  /* top: 10px; */
`;

const HomeIcon = styled(Home)`
  color: ${(props) => props.theme.accent};
  margin-right: 2rem;
  /* position: absolute; */
  /* left: -80px; */
  /* top: 10px; */
`;

const ChartIcon = styled(LineChart)`
  color: ${(props) => props.theme.accent};
  margin-right: 2rem;
  /* position: absolute; */
  /* left: -80px; */
  /* top: 10px; */
`;

const StyledFeaturesContainer = styled.div`
  max-width: 1200px;

  h1 {
    color: ${(props) => props.theme.text};
    padding-top: 0;
    font-weight: 700;
    font-size: 5rem;
    margin-top: 0;
  }

  .featureGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    color: ${(props) => props.theme.text};
  }

  .gridItem {
    position: relative;
    margin: 0 auto;

    p {
      text-align: left;
      padding-left: 8rem;
    }

    h2 {
      text-align: left;
    }
  }
`;

export { StyledFeaturesContainer, CardIcon, MoneyIcon, HomeIcon, ChartIcon };
