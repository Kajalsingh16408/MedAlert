import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <div className='hero container'>
      <div className="banner">
        <h1>{title}</h1>
        <p>
          Your health is your greatest asset—and MedAlert is your digital partner in protecting it.

We warmly welcome you to a platform where healthcare is simple, fast, and reliable. At MedAlert, you can book appointments effortlessly, explore department details, and reach out for support whenever you need it.

Our goal is to prioritize your well-being with every click. Whether you're looking for Radiology, Pediatrics, or Cardiology services, MedAlert brings every department closer to you.

Your health, our responsibility. Welcome to MedAlert—where care is just a touch away.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>

  )
}

export default Hero
