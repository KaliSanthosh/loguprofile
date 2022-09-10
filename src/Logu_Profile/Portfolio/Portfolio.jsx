import React, { useEffect } from 'react';
import './Portfolio.css';
import {  Pagination ,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Aos from 'aos';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1
  }
};

const Portfolio = () =>{
  const data=[{src:'./image/Banner1.jpg',title:'Computer Service',decps:"A computer repair technician is a person who repairs and maintains computers and servers. The technician's responsibilities may extend to include building or configuring new hardware, installing and updating software packages, and creating and maintaining computer networks."},
                {src:'./image/w-design.png',title:'Webpage Development',decps:'Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.'},
                {src:'./image/network.jpg',title:'Network Connection',decps:'Network connectivity describes the extensive process of connecting various parts of a network to one another, for example, through the use of routers, switches and gateways, and how that process works.'},
                {src:'./image/computerlab.jpg',title:'Lab Administrator',decps:'Along with managing staff and their timetables, laboratory administrators work with partners inside and outside the organization to help fulfill their needs. Laboratory administrators are in charge of prioritizing each project and supervising the workload within the establishment.'},
                {src:'./image/Projector.jpg',title:'Projector Maintanence',decps:'Your projector needs little maintenance to keep working at its best. You may need to clean the lens periodically, and clean the air filter and air vents to prevent the projector from overheating due to blocked ventilation. The only parts you should replace are the air filter and remote control batteries. '},
                {src:'./image/labmain.jpg',title:'Lab Maintanance',decps:'Routine maintenance of laboratory equipment will ensure that the experiments are conducted efficiently and without malfunctions, and will avoid unnecessary repair expenses. A clean laboratory without dust and dirt is the basis for proper equipment.'},
                {src:'./image/cctv.jpg',title:'Networking / CCTV',decps:'Our technicians are involved with system administration & Network Configuration , So we will help you with all your home and office networking with various networking equipmet including routers, switches,wireless networks and CCTV'}]

    useEffect(()=>{
      Aos.init({duration:1000});
    },[])

  return(
    <div className='P-container' id="Portfolio">
        <br/><br/>
        <h3>--- Portfolio ---</h3><br/>
        <p>This is my daily work and duty then i was give the full effort and give my best </p>
        <br/>
        <Swiper responsive={responsive} data-aos="fade-up" className='swiper'
            modules={[ Pagination,  A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}>
              {
                data.map((index)=>{
                  return(
                    <SwiperSlide className='swiperslide'>
                      <img style={{width:"100%",height:"200px"}} src={index.src}/>
                      <h3>{index.title}</h3>
                      <p style={{lineHeight:"22px"}}>{index.decps}</p>
                    </SwiperSlide>
                  )
                })
              }
         </Swiper>
    </div>
  )
}
export default Portfolio;