import styled from '@emotion/styled';
import React from 'react';


export default function SectionTitle({title}) {
    
    return (
      <StyledTitle >
      {title}
      </StyledTitle>
    )
  }
  const StyledTitle = styled.div`
    // background-color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.primary};
    font-size: 3em;
    @media(max-width: 600px) {
     font-size: 2em;
    }
    color: white;
    text-align: center;
    padding: 50px;
    margin-top: 150px;
    font-weight: 100;
  `