import React from 'react'
import styled from '@emotion/styled';
import {css,cx,} from '@emotion/core'
export function Contact({contacts: contacts}) {
    const URL =  'http://localhost:1337'

    return (
        <>

            <StyledParagraph>
                Napisz do nas a odpowiemy na wszystkie pytania i przygotujemy spersonalizowaną ofertę.
                info@holofan3d.pl
            </StyledParagraph>
            <StyledGallery>

                {contacts.map(prod => {
                    return (
                        <>
                            <div className="img">
                                <img src={URL + prod.icon.formats.thumbnail.url} />
                                <h3> {prod.title}</h3>
                                <p>{prod.perName}</p>
                                <p>{prod.email}</p>
                            </div>

                        </>
                    )
                })}
            </StyledGallery>

        </>
    )
}
const StyledParagraph = styled.p`
color: white;
      font-size: 20px;
      text-align: center;
      font-weight: 100;
      font-family: ${props => props.theme.fonts.secondary};
     
`

const StyledGallery = styled.div`
      margin-top: 50px;
      display: grid;
      grid-column-gap: 60px;
      grid-row-gap: 60px;
      grid-template-columns: auto auto auto;
      justify-content: center;
      padding-bottom: 200px;
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
      text-align: center;
        width: 70%;
        color: white;
      margin: 10px auto;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
      }
`
export  default Contact;