import styled from '@emotion/styled';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Button from './ButtonCta'
import { useTransition, animated } from 'react-spring'
import { render } from 'react-dom'


export default function Main() {

    const ref = useRef([])
    const [items, set] = useState([])
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    })

    const reset = useCallback(() => {
        ref.current.map(clearTimeout)
        ref.current = []
        set([])
        ref.current.push(setTimeout(() => set(['HOLOGRAMY', 'TELEBIMY', 'ATRAKCJE!']), 2000))
        // ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
        // ref.current.push(setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000))
    }, [])

    useEffect(() => void reset(), [])


    return (
      <StyledMain>
        <div className="container">
          <img className='logo-img' src='https://holofan3d.pl/wp-content/uploads/2020/06/Holofan_Horizontal_ColorWhite_RGB.png' />
            {/*{transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (*/}
            {/*    <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>*/}
            {/*        <animated.h3 className="caption" style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.h3>*/}
            {/*    </animated.div>*/}
            {/*))}*/}
          <h3 className="caption"> WYRÓŻNIJ SIE Z TŁUMU </h3>
          <Button title={"ZADZWOŃ"} isBig/>

        </div>
      </StyledMain>
    )
  }




  const StyledMain = styled.div`
  height: 93vh;
  //background-image: url('https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-position: center;
  background-size: cover;

  .container{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -80%);
    max-width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media(max-width: 600px) {
    top: 60%;
      
    }
  }
  .logo-img{
    max-width: 80vw;
  }
  .caption{
    color: white;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 60px;
    margin-bottom: 40px;
      @media(max-width: 600px) {
        font-size: 30px;
        text-align: center;
      
    }
  }
 
  `