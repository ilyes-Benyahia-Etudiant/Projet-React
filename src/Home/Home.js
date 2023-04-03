import React from 'react'
import '../Home/Home.css'
import Container from 'react-bootstrap/Container';
import Photography from "../Home/Photography.jpg"

const Home = () => {
  return (
    <div className='main'>

      <Container id='home'>
        <figure className='position-relative'>
        <img src={Photography} alt="Photography" className='img-fluid'/>
            <figcaption>
                <h1 id='title'>Charles Quantin - Photographe</h1>
            </figcaption>
        </figure>
      </Container>

    </div>
  )
}

export default Home