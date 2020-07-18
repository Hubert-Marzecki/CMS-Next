import Main from '../components/Main'
import fetch from 'isomorphic-unfetch'
import Slider from '../components/Slider'
import React from 'react';
import SectionTitle from '../components/SectionTitle';

const URL =  'http://localhost:1337'

export const  Home = ({sliders})  => {

  return (
    <>
      <Main/>
      <SectionTitle title={"POZNAJ HOLOFAN"}/>
      <Slider sliders={sliders} API={URL}/>
      </>
  )
}

export async function getServerSideProps(){
  const { API_URL } = process.env;
  const res = await (await fetch(`${URL}/sliders`))
  const data = await res.json();

return {
  props: {
    sliders: data
  }
}

}
export default Home;
