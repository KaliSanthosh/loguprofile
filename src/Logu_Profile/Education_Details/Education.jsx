import React, { useEffect } from "react";
import './Education.css';
import { FaUserGraduate } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { GiGiftOfKnowledge } from 'react-icons/gi';
import { BsClockHistory } from 'react-icons/bs';
import { AiFillExperiment } from 'react-icons/ai';
import { FaHandPointRight } from 'react-icons/fa';
import { useState } from "react";
import Typical from 'react-typical';
import Aos from 'aos';

import model from '../../img/loganathan.jpeg';

const Education = () =>{

  const [view,setView] = useState("education");

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])

  const Education_details = [
                              {cources:"B.E..( Computer Science Engineer )",institute:"P S V collage Engineering & Technology",address:"Krishnagiri"},
                              {cources:"DCSE..( Diploma in Computer Science )",institute:"st.Joseph's Polytecniqec collage of Engineering",address:"Krishnagiri"},
                              {cources:"12(th)",institute:"Government High school",address:"Krishnagiri"},
                              {cources:"SSLC",institute:"Government High school",address:"Krishnagiri"}
                            ]

  return(
    <div id="Education" className="E-container">
       <h3 style={{textAlign:"center",marginRight:"40px"}}>-----  Resume  -----</h3>
       <p style={{textAlign:"center",marginTop:"-1rem",color:"gray",textShadow:"0 5px 5px black",fontWeight:"500"}}>My Formal Bio Details</p>
       <div className="E-Main">
          <div className="E-left">
            <ul>
              <li onClick={()=>setView("education")}><FaUserGraduate/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Education_Detail</li><br/><br/>
              <li onClick={()=>setView("personal")}><RiContactsFill/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Personal Details</li><br/><br/>
              <li onClick={()=>setView("skill")}><GiGiftOfKnowledge/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Skill's</li><br/><br/>
              <li onClick={()=>setView("work")}><BsClockHistory/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Work History</li><br/><br/>
              <li onClick={()=>setView("interest")}><AiFillExperiment/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interests</li><br/><br/>
            </ul>
          </div>
          <div  className="E-right">
            { view === "education" &&<div data-aos="fade-down">
              {
                Education_details.map((i)=>{
                  return(
                    <>
                    <div className="e-cards">
                      <h3 style={{fontWeight:"600",fontFamily:"monospace",letterSpacing:"5px"}}><Typical loop={1} steps={[i.cources,2000]}/></h3>
                      <div style={{border:"1px solid gray",color:"grey",borderRadius:"7px",padding:"10px",fontFamily:"monospace",fontWeight:"bolder",textShadow:"0 5px 5px gray",paddingLeft:"20px"}}>
                          <h4 style={{color:"gray",fontWeight:"bold"}}>{i.institute}</h4>
                          <h5 style={{color:"gray",fontWeight:"bold"}}>{i.address}</h5>
                      </div>
                    </div>
                    </>
                  )
                })
              }
              </div>}

            { view === "personal" && <div data-aos="fade-down" className="pe-cards">
                <div style={{display:"flex",flexDiretion:"row"}}>
                <img style={{width:"150px",height:"200px",border:"5px solid rgb(7,52,56)",boxShadow:"0 10px 10px 0 black"}} src={model}/>
                <ul style={{marginLeft:"20px"}}>
                  <li>Name     : Loganathan - P</li>
                  <li>Father   : Ponnusamy</li>
                  <li>Mother   : Neelammal</li>
                  <li>Wife     : </li>
                  <li>Daughter : </li>
                  <li>Address  : <p>Sokkadi (vill & post),Krishnagiri (Dt) - 635002</p></li>
                </ul>
                </div>
                <p style={{color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Oversee computer systems, databases, network, and technical systems for all students and staff. Act as primary contact with computer, network, software, translation/typesetting</p>
              </div>}
            
            { view === "skill" && <div className="sk-container" data-aos="fade-down">

                 <div><FaHandPointRight/> <span>Computer Services</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Computer services consist of development, designing and management of information systems and customised software.</p></div>   
                 <div><FaHandPointRight/> <span>Network Connection</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Network connectivity describes the extensive process of connecting various parts of a network to one another, for example, through the use of routers, switches and gateways, and how that process works</p></div>   
                 <div><FaHandPointRight/> <span>Webpage Develoment</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.</p></div>   
                 <div><FaHandPointRight/> <span>Lab Administrative</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser.</p></div>   
                 <div><FaHandPointRight/> <span>Good Communication</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Communication skills enable individuals to understand others and to be understood themselves.</p></div>   
                  
              </div> }
            
            { view === "work" && <div className="sk-container" data-aos="fade-down">

                <div><FaHandPointRight/> <span>Network Engineering in Chennai </span><br/>&nbsp;</div> <br/>  
                <div><FaHandPointRight/> <span>Network Connection</span><br/>&nbsp;</div>   <br/>
                <div><FaHandPointRight/> <span>Webpage Develoment</span><br/>&nbsp;</div>   <br/>
                <div><FaHandPointRight/> <span>Lab Administrative</span><br/>&nbsp;</div>   <br/>
 
              </div> }
            { view === "interest" && <div className="sk-container" data-aos="fade-down">

                <div><FaHandPointRight/> <span> Sports </span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Sport pertains to any form of competitive physical activity or game that aims to use, maintain, or improve physical ability and skills while providing enjoyment </p></div>   
                <div><FaHandPointRight/> <span>Hills Riding</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Riding up a slope in slush or on rocks is not as easy as the hill-climb pros make it look. Getting stuck in the middle of a slope with low grip ruins the momentum of the motorcycle when it is climbing</p></div>   
                <div><FaHandPointRight/> <span>Music Listening</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Music can boost the brain's production of the hormone dopamine. This increased dopamine production helps relieve feelings of anxiety and depression. Music is processed directly by the amygdala, which is the part of the brain involved in mood and emotions. It reduces stress</p></div>   
                <div><FaHandPointRight/> <span>Books Reading</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>In addition to improving your emotional and cognitive intelligence, reading can also help broaden your vocabulary, with some research concluding that “above average readers experienced a higher rate of vocabulary growth than did average readers.”</p></div>   
                <div><FaHandPointRight/> <span>Making Forming</span><br/>&nbsp;<p style={{marginLeft:"20px",color:"gray",border:"1px solid lightgrey",borderRadius:"10px",padding:"15px"}}>Farming is the act or process of working the ground, planting seeds, and growing edible plants. You can also describe raising animals for milk or meat as farming.</p></div>   

              </div> }
          </div>
       </div>
    </div>
  )
}
export default Education;