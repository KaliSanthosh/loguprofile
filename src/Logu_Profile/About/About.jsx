import React from "react";
import './About.css';
import axios from "axios";
import { useState,useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import imga from '../../img/logu.jpeg';

const About = () =>{
  const [imgView,setImgView] = useState([]);

  const Loading = async() =>{
     const view = await axios.get("http://localhost:4000/image");
     setImgView(view.data);
  }

  useEffect(()=>{
     Loading();
     Aos.init({duration:"1000"});
  },[])

  return(
    <div id="About" className="A-container">
       <div className="A-1">
              <div data-aos="fade-up" className='A-sr'>
                <img src={imga}/>
              </div>
       </div>
       <div className="A-2">
           <div className="A-Main">
              <h3 data-aos="fade-left">--- About Me ---</h3><br/>
              <p>
                <h4>Hi , Hellow !!!! </h4>&nbsp;&nbsp;&nbsp;&nbsp;
                I'm Loganathan my occupation is network engineer in " P M C colllage oc Engineering " . Then i was completed degree in " P S V collage of Engineering " on 2017 and my native is Krishnagiri , I'm a technology professional who has the necessary skills to plan, implement and oversee the computer networks that support in-house voice, data, video and wireless network services
                
              </p>
           </div>
       </div>
    </div>
  )
}
export default About;