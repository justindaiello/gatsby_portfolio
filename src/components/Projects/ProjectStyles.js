import styled from 'styled-components';

const StyledContainer = styled.div`
  .matchBody {
    background: ${(props) => props.theme.body};

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export default StyledContainer;
