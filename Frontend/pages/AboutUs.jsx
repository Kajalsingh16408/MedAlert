import React from 'react'
import Hero from "../src/Components/Hero"
import BioGraphy from '../src/Components/BioGraphy'

const AboutUs = () => {
  return (
    <>
      <Hero title ={"Learn More About Us | MedAlert "}
      imageUrl={"/about.png"}
      />
      <BioGraphy imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default AboutUs;
