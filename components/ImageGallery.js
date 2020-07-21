import React from 'react'
import styled from '@emotion/styled';

export function ImageGallery({images}) {
    const URL =  'http://localhost:1337'

    console.log(images)
    return (
    <>
        <StyledGallery>
            {images.map(image => {
                return (
                    <div>
                        <img src={URL + image.img.formats.thumbnail.url} />
                        <h3>
                            {image.title}
                        </h3>
                        <p>
                            {image.info}
                        </p>
                    </div>
                )
            })}
        </StyledGallery>

    </>
    )
}
const StyledGallery = styled.div`
      margin-top: 50px;
      display: grid;
      grid-column-gap: 60px;
      grid-row-gap: 60px;
      grid-template-columns: auto auto auto;
      justify-content: center;
      padding-bottom: 50px;
      
      div{
      width: 25vw;
      }
      img{
      width: 100%;
      display: block;
      margin: 0 auto;
      }
      h3{
      margin-top: 20px;
      color: ${props => props.theme.colors.fontPrimary};
      font-size: 20px;
      text-align: center;
      font-family: ${props => props.theme.fonts.primary};
      }
      p{
      margin-top: 20px;
        width: 100%;
        color: white;
      text-align: justify;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
      }
`
export  default ImageGallery;