import styled from '@emotion/styled';

export default function Main() {
    
    return (
      <StyledMain>
        <div className="container">
          <img className='logo-img' src='https://holofan3d.pl/wp-content/uploads/2020/06/Holofan_Horizontal_ColorWhite_RGB.png' />
          <h3 className="caption"> WYRÓŻNIJ SIE Z TŁUMU </h3>
          <button className="cta"> ZADZWOŃ </button>
        </div>
      </StyledMain>
    )
  }
  const StyledMain = styled.div`
  height: 93vh;
  background-image: url('https://images.pexels.com/photos/1044990/pexels-photo-1044990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
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
    flex-direction: column
  }
  .logo-img{
    max-width: 80vw;
  }
  .caption{
    color: white;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 60px;
    margin-bottom: 40px;
  }
  .cta {
    background-color: transparent;
    color: ${props => props.theme.colors.fontPrimary};
    border-color:  ${props => props.theme.colors.fontPrimary};
    border-radius: 5px ;
    border-width: 2px;
    padding: 10px 15px;
    font-size: 30px;
    font-family: ${props => props.theme.fonts.primary};
  }
  
  `