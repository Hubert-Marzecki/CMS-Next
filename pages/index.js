import Main from '../components/Main'
import fetch from 'isomorphic-unfetch'
import Slider from '../components/Slider'
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import styled from '@emotion/styled';
import {IconGallery} from "../components/IconGallery";
import ImageGallery from "../components/ImageGallery";
import ProductsGalleryOne from "../components/ProductsGalleryOne";
import AccesoriesGallery from "../components/AccesoriesGallery";
import Services from "../components/Services";
import {Contact} from "../components/Contact";

const URL =  'http://localhost:1337'

export const  Home = ({sliders, icons, images, holofans, accesories, services, contacts})  => {

  return (
      <StyledWindow>
      <Main/>
      <SectionTitle title={"POZNAJ HOLOFAN"}/>
      <Slider sliders={sliders.slice(0,3)} API={URL}/>
      <IconGallery icons={icons}/>
      <SectionTitle title={"JEDEN PRODUKT - WIELE ZASTOSOWAŃ"}/>
      <ImageGallery images={images} />
      <SectionTitle title={"NASZE PRODUKTY"}/>
      <ProductsGalleryOne products={holofans} />
      <SectionTitle title={"AKCESORIA"}/>
      <AccesoriesGallery products={accesories.slice(0,3)} />
      <SectionTitle title={"POZNAJ HOLOGOBO"}/>
      <Slider sliders={sliders.slice(3,6)} API={URL}/>
      <SectionTitle title={"WSPARCIE"}/>
      <Services services={services} />
      <SectionTitle title={"KONTAKT"}/>
      <Contact contacts={contacts} />
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
    const resProd = await (await fetch (`${URL}/products`));
    const prodData = await resProd.json();
    const resAcce = await (await fetch (`${URL}/accesories`));
    const accesoriedData = await resAcce.json();
    const resServices = await (await fetch(`${URL}/services`))
    const servicesData = await resServices.json();
    const resContacts = await (await  fetch(`${URL}/contacts`));
    const contactsData = await resContacts.json();

    return {
      props: {
        sliders: data,
        icons: iconData,
        images: imgData,
          holofans: prodData,
          accesories: accesoriedData,
          services:servicesData,
          contacts:contactsData,


      }
    }
}

const StyledWindow = styled.div`

//background-image: url("http://localhost:1337/uploads/background1_min_613c957a29.png");
//background-position: center;
//background-size: cover;
//background-attachment: fixed;
`

export default Home;
// TODO dodać więcej paddingu w png obrazka holowall