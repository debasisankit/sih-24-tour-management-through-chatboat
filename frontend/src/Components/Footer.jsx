import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

const quick__links=[
  {
      path:'/home',
      display:'Home'
  },
  {
      path:'/about',
      display:'About'
  },
  {
      path:'/tours',
      display:'Tours'
  },
];
const quick__links2=[
  {
      path:'/gallery',
      display:'Gallery'
  },
  {
      path:'/register',
      display:'Register'
  },
  {
      path:'/login',
      display:'Login'
  },
];

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Col lg='3'>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, nulla!</p>
        <div className="social__lonks d-flex align-item-center gap-4">
          <span>
            <Link to='#'><i class="ri-youtube-fill"></i></Link>
          </span>
          <span>
            <Link to='#'><i class="ri-facebook-fill"></i></Link>
          </span>
          <span>
            <Link to='#'><i class="ri-instagram-line"></i></Link>
          </span>
          <span>
            <Link to='#'><i class="ri-github-fill"></i></Link>
          </span>
        </div>
      </div>
      </Col>
      <Col lg="3">
      <h5 className='footer__link-title'>Discovery</h5>
      <ListGroup className="footer__quick-link">
      {
        quick__links.map((item,index)=>(
          <ListGroupItem key={index} className='ps-0 border-0'>
            <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }
      </ListGroup>
      </Col>
      <Col lg="3">
      <h5 className='footer__link-title'>Discovery</h5>
      <ListGroup className="footer__quick-link">
      {
        quick__links2.map((item,index)=>(
          <ListGroupItem key={index} className="ps-0 border-0">
            <Link to={item.path}>{item.display}</Link>
          </ListGroupItem>
        ))
      }
      </ListGroup>
      </Col>
      <Col lg="3"></Col>
    </Container>

  </footer>
}

export default Footer
