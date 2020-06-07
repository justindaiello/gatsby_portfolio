import styled from 'styled-components';

const ContentContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 300;
    margin: 2rem 0 1rem;
    color: ${(props) => props.theme.text};
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  transition: all 0.2s;
  position: relative;
  display: inline-block;

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
    background: ${(props) => props.theme.accent};
    content: '';
    width: 0;
    position: absolute;
    transform: translateX(-50%);
    transition: width 0.4s;
    transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    left: 50%;
    bottom: 0;
  }

  &:hover,
  &:focus {
    outline: none;

    &:after {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    display: inline-block;

    &:focus {
      outline: 2px solid ${(props) => props.theme.accent};
    }

    &:after {
      background: none;
    }
  }
`;

export { ContentContainer, StyledLink };
