import React from 'react'
import MessageForm from "../src/Components/MessageForm.jsx";
import BioGraphy from "../src/Components/BioGraphy.jsx";
import Departments from "../src/Components/Departments.jsx";
import Hero from "../src/Components/Hero.jsx";



const Home = () => {
  return (
    <>
      <Hero title={"Welcome"} imageUrl={"/hero.png"}/>
      <BioGraphy imageUrl={"/about.png"}/>
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
