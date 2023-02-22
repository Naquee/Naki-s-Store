import React from 'react'
import styled from 'styled-components'
import FeatureProducts from '../components/FeatureProducts';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Trusted from '../components/Trusted';

const Home = () => {
  const data={
    name:"Naki's Store"
  }
  return (
  <>
  <HeroSection myData={data}/>
  <FeatureProducts/>
  <Services/>
  <Trusted/>
 

  </>
  )
};

// const Wrapper = styled.section`
// height:100vh;


// `

export default Home