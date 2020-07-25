import React from 'react'
import styled from '@emotion/styled';

export function AccesoriesGallery({products: accesories}) {
    const URL =  'http://localhost:1337'




    return (
        <>
            <StyledGallery>
                {accesories.map(prod => {
                    return (
                        <>
                            <div className="img">
                                <h3> {prod.title}</h3>
                                <p> {prod.info }</p>
                                <img src={URL + prod.img.formats.thumbnail.url} />
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
        @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
      }
      div{
      width: 25vw;
         @media(max-width: 600px) {
        width: 90%;
        display: block;
        margin: 0 auto;
        }
      }
   
      img{
      width: 70%;
      display: block;
      margin: 0 auto;
      }
      h3{
      margin-top: 20px;
      color: ${props => props.theme.colors.fontPrimary};
      font-size: 25px;
      text-align: center;
      font-family: ${props => props.theme.fonts.primary};
      }
      p{
        width: 80%;
        color: white;
      margin: 20px auto;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
      }
`
export  default AccesoriesGallery;