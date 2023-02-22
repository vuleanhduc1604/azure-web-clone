import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import Post from './components/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Corediv from './components/Corediv';
function App() {
  return (
    <div className='app'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://azureams.org/assets/logo.png" alt="" className='logo-menu'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">TRANG CHỦ</Nav.Link>
              <Nav.Link href="#link">NEWS & BLOGS</Nav.Link>
              <Nav.Link>VỀ CLB</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='bg row align-center'>
        <div className='bg-word col-7'>
          <div className='bg-word-header'>
            CLB AzureAms hiện đang mở đơn tuyển thành viên
          </div>
          <div className='bg-word-desc'>
            Câu lạc bộ chuyên sâu lập trình đầu tiên và duy nhất tại trường THPT Chuyên Hà Nội - Amsterdam
          </div>
          <div className='button-wrapper'>
            <button className='button'>
              Tham gia ngay!
            </button>
          </div>
        </div>
        <div className='bg-img-wrapper col-5'>
          <img src="https://azureams.org/assets/logo.png" alt="" className='bg-img'/>
        </div>
      </div>
      <div className='recent-post'>
        <h1>Bài viết gần đây</h1>
        <div className='post-list row justify-content-around'>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
      <div className='core-team mg-40'>
        <div className="core-team-header">
          <h1>CORE TEAM</h1>
        </div>
        <div>
          <Swiper
          spaceBetween={50}
          slidesPerView={5}
        >
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide><SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
          <SwiperSlide>
            <Corediv/>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <footer className='d-flex justify-content-between'>
        <div className="footer-content">
          <h2 className='footer-header'>Liên hệ</h2>
          <p className="footer-cont"><i class="fa-solid fa-phone"></i>(+84) 975 277 777</p>
          <p className="footer-cont"><i class="fa-solid fa-envelope"></i>azureamsprogrammingclub@gmail.com</p>
          <p className="footer-cont"><i class="fa-brands fa-facebook"></i>https://www.facebook.com/azureamsprogramming</p>
        </div>
        <div className='footer-avatar-container'>
          <img src="https://azureams.org/assets/logo.png" alt="" className='footer-avatar'/>
        </div>
      </footer>
    </div>
  )
}

export default App
