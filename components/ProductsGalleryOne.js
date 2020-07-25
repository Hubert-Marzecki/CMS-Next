import React from 'react'
import styled from '@emotion/styled';
import {setConfig} from "next/config";

export function ImageGallery({products: holofans}) {
    const URL =  'http://localhost:1337'

function colored(sentence) {
    const colored = sentence.slice(0, sentence.indexOf(":") +2)
    return (
        <>
        <StyledSpan className="colored">{colored}</StyledSpan>
        <span> {sentence.slice(sentence.indexOf(":"), sentence.length)} </span>
            </>
    )
}

    function toNewLine(elem ,a) {
        const firstLine = elem.indexOf("cm") +2;
        const secLine = elem.indexOf("px") +2 ;
        const thirdLine = elem.indexOf("kg") + 2;
        const lastElement = elem.lastIndexOf('W') +1;
       return(
           <>
               <p> {colored(elem.slice(0, firstLine))} </p>
               <p> {colored(elem.slice(firstLine, secLine))} </p>
               <p> {colored(elem.slice(secLine, thirdLine))} </p>
               <p> {colored(elem.slice(thirdLine, lastElement))} </p>
               <p> {colored(elem.slice(lastElement, elem.length))} </p>
               </>
       )
    }

    return (
        <>
            <StyledGallery>
                {holofans.map(prod => {
                    return (
                        <>
                        <div className="img">
                            <h3> {prod.prodName}</h3>
                            <img src={URL + prod.img.formats.thumbnail.url} />
                            <p>{toNewLine(prod.desc, 0 )}</p>
                        </div>

                        </>
                    )
                })}
            </StyledGallery>

        </>
    )
}

const StyledSpan = styled.span`
 color: ${props => props.theme.colors.fontPrimary}
`


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
      width: 50%;
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
        width: 80%;
        color: white;
        font-weight: 800;
      text-align: center;
      margin: 20px auto;
      font-family: ${props => props.theme.fonts.secondary};
      line-height: 1.3em;
      
      .span{
       color: red
      }
      }
`
export  default ImageGallery;