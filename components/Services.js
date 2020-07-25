import React from 'react'
import styled from '@emotion/styled';

export function Services({services: services}) {
    const URL =  'http://localhost:1337'




    return (
        <>
            <StyledGallery>
                {services.map(prod => {
                    return (
                        <>
                            <div className="img">
                                <img src={URL + prod.icon.formats.thumbnail.url} />
                                <h3> {prod.title}</h3>
                                <p> {prod.info }</p>
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
      width: 30%;
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
        width: 70%;
        
        color: white;
      margin: 20px auto;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
          @media(max-width: 600px) {
            width: 90%;
            }
      }
`
export  default Services;