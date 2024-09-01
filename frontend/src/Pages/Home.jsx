import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../Components/Featured-tours/FeaturedTourList';

const Home = () => {
  return (
  <>
  {/*======================= hero section start ==================*/}
  <section>
  <Container>
  <Row>
  <Col lg='6'>
  <div className="hero__content">
       <div className="hero__subtitle d-flex align-item-center">
        <Subtitle subtitle={'Know Before You Go'}/>
        <img src={worldImg} alt="" />
       </div>
       <h1>Travelling open the door to creating <span className="highlight">memories</span></h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis consequatur perspiciatis, iure illum numquam ullam modi exercitationem omnis, debitis molestiae distinctio ea cupiditate! Veniam laudantium eius, beatae nostrum molestias alias!</p>

  </div>
  </Col>

 <Col lg='2'>
 <div className="hero__image-box">
  <img src={heroImg} alt="" /></div>
  </Col>
  <Col lg='2'>
 <div className="hero__image-box mt-4">
  <video src={heroVideo} alt="" controls /></div>
  </Col>
  <Col lg='2'>
 <div className="hero__image-box mt-5">
  <img src={heroImg02} alt="" /></div>
  </Col>

  <SearchBar/>

  </Row>

  </Container>



  </section>
    {/*======================= hero section end ==================*/}
  
  <section>
    <Container>
      <Row>
        <Col lg='3'>
        <h5 className="service__subtitle">What we serve</h5>
        <h2 className="servise__title">We offer our best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  {/*=================== featured tour section start ===============*/}
  <section>
    <Container>
  <Row>
    <Col lg='12' className="mb-5">
    <Subtitle subtitle={'Explore'}/>
    <h2 className="featured__tour-title"> 
      Our featured tours

    </h2>
    
    </Col>
    <FeaturedTourList/>
    </Row>
</Container>
  </section>
    {/*=================== featured tour section start ===============*/}
    {/*==================== Experience section start ==================*/}

    <section>
      <Container>
        <Row>
          <Col lg='6'> 
          <div className="experience__content">
            <Subtitle subtitle={"Experience"}/>

            <h2>With our all experience <br /> we will serve you </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />Dolorum officia dignissimos minus? Corrupti, eius beatae!</p>
          </div>

          <div className="container__wrapper d-flex align-item-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successfull trip</h6>
            </div>
            <div className="counter__box">
              <span>2k+</span>
              <h6>Regular client</h6>
            </div>
            <div className="counter__box">
              <span>15</span>
              <h6>Years experience</h6>
            </div>
          </div>
          </Col>
          <Col lg='6'> 
          </Col>
        </Row>
      </Container>


    </section>

    {/*==================== Experience section end ==================*/}

  
  </>
  )
}

export default Home
