import fetch from 'isomorphic-unfetch'
import React, { useState } from 'react';
import styled from '@emotion/styled';
import ButtonCta from './ButtonCta'
import {css,cx,} from '@emotion/core'
import next from 'next';


export const  Slider = ({sliders, API: URL})  => {
const [start, setStart] = useState(0)
const SLIDES = 1;


console.log(sliders.length);
const moveSlide = (direction) => {
    
    switch (direction) {
        case 'NEXT':
        if (start + SLIDES >= sliders.length) {
            setStart(0)
        } else {
            setStart(start + SLIDES)
        }
        break;
        case 'BACK':
            if (start - SLIDES < 0) {
                setStart(sliders.length)
            } else {
                setStart(start - SLIDES)
            }   
            break;
    }

 
}
return (
        <>
        <StyledSection>
          {sliders.slice(start,start+SLIDES).map(item => {
              return (
                  <SlideStyled key={item.id}>
                      <div className="img__holder">
                      <img className="img__holo" src={ URL + item.img.formats.medium.url} alt=""/> 
                      </div>
                    <div className="info__holder">
                        <h3 className="holo__title"> {item.title} </h3>
                        <p className="holo__desc"> {item.description} </p>
                    <ButtonCta title={"ZADZWOŃ"}  /> 
                    </div>
                    </SlideStyled>
              )
          })}
        
  
          <StyledArrow left onClick={() => moveSlide("BACK")}>
              ARROW
          </StyledArrow>
          <StyledArrow right onClick={() => moveSlide("NEXT")}>
              ARROW
          </StyledArrow>
          </StyledSection>
        </>
    )
}

const StyledSection = styled.section`
//background-color: ${props => props.theme.colors.primary};
position: relative;
color: white;
height: 500px;
`
const StyledArrow = styled.span`
position: absolute;
top:50%;
left: ${props => props.left ? "15%" : "85%"};
transform: translate(-50%, -50%);
`
const SlideStyled = styled.div`
display: flex;
justify-content: center;
img{
    /* height: 500px; */
    max-width: 400px;
    margin-top: 100px;
    margin-right: 50px;
}
.info__holder{
    width:30vw;
}
.holo__title{
    margin-bottom: 50px;
    margin-top: 50px;
    font-size: 40px;
    font-family: ${props => props.theme.fonts.primary};
}
.holo__desc{
    margin-bottom: 50px;
    font-family: ${props => props.theme.fonts.secondary};
    line-height: 1.4em;
    text-align: justify;

}
`
  export default Slider;
  