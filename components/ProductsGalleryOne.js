import React from 'react'
import styled from '@emotion/styled';

export function ImageGallery({products: holofans}) {
    const URL =  'http://localhost:1337'


    function toNewLine(elem ,a) {
        const firstLine = elem.indexOf("cm") +2;
        const secLine = elem.indexOf("px") +2 ;
        const thirdLine = elem.indexOf("kg") + 2;

       return(
           <>
               <p> {elem.slice(0, firstLine)} </p>
               <p> {elem.slice(firstLine, secLine)} </p>
               <p> {elem.slice(secLine, thirdLine)} </p>
               <p> {elem.slice(thirdLine, elem.length)} </p>
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
      }
`
export  default ImageGallery;