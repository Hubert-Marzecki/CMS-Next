import React from 'react';
import styled from '@emotion/styled';

function Header () {
    return (
      <HeaderStyle >
          <div className='container'>
            <div className='logo'>
                <img className='logo-img' src='https://holofan3d.pl/wp-content/uploads/2020/06/Holofan_Horizontal_ColorWhite_RGB.png' />
            </div>

            <nav>
                <ul>
                    <li> <a href="#">ODKRYJ</a> </li>
                    <li> <a href="#">INSPIRACJE</a> </li>
                    <li> <a href="#">HOLOFAN</a> </li>
                    <li> <a href="#">HOLOGOBO</a> </li>
                    <li> <a href="#">WSPARCIE</a> </li>
                    <li> <a href="#">KONTAKT</a> </li>
                </ul>
            </nav>
          </div>


      </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
background: ${props => props.theme.colors.primary};
padding: 35px;
font-family: ${props => props.theme.fonts.primary};

.logo{
    display: flex;
    align-items: center;
    height: 20px;
    
    .logo-img{
        height: 70px;
    }
}

nav{
    display: flex;
    margin-top: -15px;
}
    ul{
        display: flex;
        margin-left: auto;
        li{
            list-style-type: none;
            margin: 0 1vw;
            font-size: 15px;
            a{
                text-decoration: none;
                color: white;
            }
        }
    }


`


export default Header;