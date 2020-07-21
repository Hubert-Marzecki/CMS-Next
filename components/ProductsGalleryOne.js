import React from 'react'
import styled from '@emotion/styled';

export function ImageGallery({products: holofans}) {
    const URL =  'http://localhost:1337'

    console.log(holofans)
    return (
        <>
            <StyledGallery>
                {holofans.map(prod => {
                    return (
                        <>
                        <div className="img">
                            <h3> {prod.prodName}</h3>
                            <img src={URL + prod.img.formats.thumbnail.url} />
                            <p>{prod.desc}</p>
                        </div>

                        </>
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
      width: 70%;
      display: block;
      margin: 0 auto;
      }
      h3{
      margin-top: 20px;
      color: white;
      font-size: 25px;
      text-align: center;
      font-family: ${props => props.theme.fonts.primary};
      }
      p{
        width: 60%;
        color: white;
      text-align: center;
      margin: 20px auto;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
      }
`
export  default ImageGallery;