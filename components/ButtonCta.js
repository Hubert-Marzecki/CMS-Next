import styled from '@emotion/styled';
import React from 'react';

export default function ButtonCta({title, isBig}) {

    return (
        <StyledButton isBig={isBig}> {title} </StyledButton>
    )
}  


const StyledButton = styled.button `   
background-color: transparent;
color: ${props => props.theme.colors.fontPrimary};
border-color:  ${props => props.theme.colors.fontPrimary};
border-radius: 5px ;
border-width: 2px;
padding: 10px 15px;
font-size: ${props => props.isBig ? '30px' : '20px' };
font-family: ${props => props.theme.fonts.primary};
`
 