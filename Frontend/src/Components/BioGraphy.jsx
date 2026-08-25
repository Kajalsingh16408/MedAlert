import React from 'react'

const BioGraphy = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImag" />
      </div>
      <div className="banner">
        <p>BioGrapgh</p>
        <h3>Who WE Are</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum vitae voluptatibus alias, ex dolore ullam aspernatur consequatur voluptates reiciendis reprehenderit, maiores sequi nesciunt natus adipisci deleniti minus? Sit, maiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nam iste, tenetur a culpa assumenda voluptas aspernatur minima, consectetur eveniet vel vero quos tempore cupiditate magnam mollitia quis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est culpa alias consequuntur et, accusamus autem sed debitis at! Temporibus!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate ex rem earum nesciunt aliquam harum?</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

    </div>
  )
}

export default BioGraphy;
