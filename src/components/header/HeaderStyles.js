import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLink = styled(Link)`
  @media (max-width: 850px) {
    display: none;
  }
  text-decoration: none;
  color: ${props => props.theme.white};
  padding: 0rem 3rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 100;
  display: flex;
  align-items: center;
  position: relative;
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
    background: #d0224a;
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    margin-top: 2rem;
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

export { StyledHeader, StyledLink };
