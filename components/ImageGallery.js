import React from 'react'
import styled from '@emotion/styled';
import { useSpring, animated } from 'react-spring'

export function ImageGallery({images}) {
    const URL =  'http://localhost:1337'
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.05]
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    console.log(images)
    return (
    <>
        <StyledGallery>
            {images.map(image => {
                return (
                    <div>
                        <animated.img src={URL + image.img.formats.thumbnail.url}
                                      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                      onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                      // style={{ transform: props.xys.interpolate(trans) }}
                        />
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
      
      @media(max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      }
      
      div{
      width: 20vw;
       @media(max-width: 600px) {
       width: 80%;
       display: block;
       margin: 0 auto;
       
       }
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