import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './Theme';

const StyledHeading = styled.h1`
  color: ${props => props.theme.white};
`;

const PrimaryLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello This is a test</h1>
      <StyledHeading>Styled Heading</StyledHeading>
    </ThemeProvider>
  );
};

export default PrimaryLayout;
