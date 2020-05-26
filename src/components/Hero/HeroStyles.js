import styled, { keyframes } from 'styled-components';

const showHidden = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

const StyledHero = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};
  padding: 0 20px;

  h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 300;
  }

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 0;
    animation: ${showHidden} 1s linear;
    font-weight: 300;

    @media (max-width: 600px) {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 600px) {
    top: 15%;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  width: 50%;
  list-style-type: none;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  animation: ${showHidden} 1s linear;
  font-weight: 300;

  li {
    margin: 0 2rem;
    font-size: 1.75rem;
    text-transform: uppercase;

    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme.accent};
      }

      &:focus {
        outline: 2px solid ${(props) => props.theme.accent};
      }
    }
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    li {
      text-align: center;
    }
  }
`;

export { StyledHero, StyledList };
