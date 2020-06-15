import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import { handleUnderline } from '../../utils/functions';

export const StyledLink = styled(TransitionLink)`
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
