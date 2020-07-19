import Main from '../components/Main'
import fetch from 'isomorphic-unfetch'
import Slider from '../components/Slider'
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import styled from '@emotion/styled';
import {IconGallery} from "../components/IconGallery";
import ImageGallery from "../components/ImageGallery";

const URL =  'http://localhost:1337'

export const  Home = ({sliders, icons, images})  => {

  return (
      <StyledWindow>
      <Main/>
      <SectionTitle title={"POZNAJ HOLOFAN"}/>
      <Slider sliders={sliders} API={URL}/>
      <IconGallery icons={icons}/>
      <SectionTitle title={"JEDEN PRODUKT - WIELE ZASTOSOWAŃ"}/>
      <ImageGallery images={images} />
      </StyledWindow>
  )
}

export async function getServerSideProps(){
  const { API_URL } = process.env;
  const res = await (await fetch(`${URL}/sliders`))
  const data = await res.json();

  const resIcon = await (await fetch (`${URL}/icons`));
  const iconData = await resIcon.json();

    const resImg = await (await fetch (`${URL}/image-galleries`));
    const imgData = await resImg.json();

    return {
      props: {
        sliders: data,
        icons: iconData,
        images: imgData

      }
    }
}

const StyledWindow = styled.div`
background-image: url("http://localhost:1337/uploads/background1_min_613c957a29.png");
background-position: center;
background-size: cover;
background-attachment: fixed;
`

export default Home;
// TODO dodać więcej paddingu w png obrazka holowall