import React from 'react'
import styled from '@emotion/styled';

export function IconGallery({icons}) {
    const URL =  'http://localhost:1337'

    return (
        <StyledGallery>
            {icons.map(icon => {
                return (
                    <div>
                        <img src={URL + icon.icon.formats.thumbnail.url} />
                        <h3>
                            {icon.title}
                        </h3>
                    </div>
                    )
            })}
        </StyledGallery>
    )
}

const StyledGallery = styled.div`
@media(max-width: 600px) {
      margin-top: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
}
      margin-top: 50px;
      margin-bottom: 100px;
      display: grid;
      grid-column-gap: 200px;
      grid-row-gap: 100px;
      grid-template-columns: auto auto auto;
      justify-content: center;
      
      div{
      width: 15vw;
      @media(max-width: 600px) {
        width: 80vw;
      margin: 0 auto;
      display: block;
      }
    
      }
      img{
      display: block;
      margin: 0 auto;
      }
      h3{
        color: white;
      font-size: 20px;
      text-align: center;
      font-family: ${props => props.theme.fonts.primary};
      }
`