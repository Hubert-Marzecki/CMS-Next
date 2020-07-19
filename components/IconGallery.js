import React from 'react'
import styled from '@emotion/styled';

export function IconGallery({icons}) {
    console.log(icons[0].title)
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
      margin-top: 50px;
      margin-bottom: 100px;
      display: grid;
      grid-column-gap: 100px;
      grid-row-gap: 100px;
      grid-template-columns: auto auto auto;
      justify-content: center;
      img{
      text-align: center;
      display: block;
      margin: 0 auto;
      }
      h3{
      color:white;
      font-size: 20px;
      text-align: center;
      font-family: ${props => props.theme.fonts.primary};
      }
`