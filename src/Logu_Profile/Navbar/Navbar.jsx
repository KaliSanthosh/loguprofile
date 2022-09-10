import React, { useState,useEffect, createContext } from "react";
import axios from 'axios';
import './Navbar.css';
import 'antd/dist/antd.css'
import Typical from 'react-typical';
import IconButton from '@mui/material/IconButton';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { AiFillEdit , AiFillTwitterCircle } from 'react-icons/ai';
import { GiRamProfile } from 'react-icons/gi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { AiFillPropertySafety } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { Anchor,BackTop } from 'antd';
import { AiTwotoneEdit } from 'react-icons/ai';
import Aos from 'aos';


const {Link} = Anchor;
export const HomeContext = createContext(null);

const Navbar = () =>{

  const [updateImg,setUpdateImg]=useState([]);
  const [view,setView]=useState(false);
  const [vie,setVie]=useState(true);
  const [viw,setViw]=useState(true);
  const [view1,setView1]=useState(false);
  const [view2,setView2]=useState(false);
  const [pwd,setPwd]=useState("");

  const Onloading = async() =>{
    const res = await axios.get("http://localhost:4000/image");
    setUpdateImg(res.data);
  }

  useEffect(()=>{
    Aos.init({duration:1000});
    Onloading();
  },[])

  const Updated = (e) =>{
       {
        const id="1"
        axios.put(`http://localhost:4000/image/${id}`,{
          id:"1",src:e
        })
        setTimeout(()=>{
          Onloading();
          setVie(true);
          setView1(false);
        },200)
      }
  }

  const uploading = (e) =>{
    const reader= new FileReader();
    reader.onload = () =>{
          Updated(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const Validated = () =>{
    if(pwd==="kali@1234")
    {
      setView1(true);
      setView(false);
      setVie(false);
    }       
    else
    {
      alert("Invailed Cridential");
      setView(false);
      setView2(false);
      setViw(true);
    }
  }

  const Setview = () =>{
    setView2(true);
    setViw(false);
  }

  return(
    <>
       <div className="navbar-container">
      <div className="n-left">
          {
              updateImg.map((index)=>{
                return(
                  <img src={index.src}/>
                )
              })
              }
              {vie ? <IconButton style={{ color: 'rgb(114, 150, 146)', marginTop: "170px" }} onClick={(e) => setView(true)} component="label">
                <AiTwotoneEdit className="ico" />
              </IconButton> : ""}
              {view1 ? <IconButton style={{ color: 'rgb(114, 150, 146)', marginTop: "170px" }} component="label">
                <input hidden type="file" onChange={(e) => uploading(e)} />
                <PhotoCamera className="ico" />
              </IconButton> : ""}
              <br /><br />
              {view ?
                <div data-aos="fade-down" className="View-container">
                  <h3><Typical loop={1} steps={["Are U Loganathan !!!!",2000]}/></h3>
                  {viw ? <div style={{ display: "flex", flexDirection: "row",marginLeft:"9rem",cursor:"pointer" }}><p style={{color:"blue",textDecoration:"underline"}} onClick={() => Setview()}>yes</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <p style={{color:"red",textDecoration:"underline"}} onClick={() => setView(false)}>No</p></div> : ""}
                  {view2 ? <div>
                    <h4 style={{color:"orangered"}}>Please Enter Ur Password..........</h4>
                    <TextField variant='outlined' color="primary" size='small' label="Password" type="password" onChange={(e) => setPwd(e.target.value)} /><br/><br/>
                    <div style={{display:"flex",fleDirection:"row",marginLeft:"6.8rem"}}><p style={{color:"red",textDecoration:"underline",position:"relative",top:"15px",cursor:"pointer"}} onClick={() => setView(false)}>Exit</p>&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" style={{cursor:"pointer"}} type="submit" onClick={() => Validated()}>Ok</Button></div>
                  </div> : ""}
                </div> : ""
              }
          
          <span style={{fontWeight:'bolder',fontSize:"20px"}}>Loga<span style={{color:'orangered',fontWeight:'bolder'}}>Nathan</span> <span> - P</span></span><br/><br/>
          <Typical loop={5} steps={["","B.E. [ Computer Science ]",2000]}/>
          <hr></hr>
      </div>      
      <div className="n-right">
          <ul>
            <Anchor>
                <Link href="#Profile" title={<li><span><GiRamProfile/></span>&nbsp;&nbsp;&nbsp;&nbsp;Profile</li>}></Link><br/>
                <Link href="#About" title={<li><span><BsFillPersonLinesFill/></span>&nbsp;&nbsp;&nbsp;&nbsp;About Us</li>}></Link><br/>
                <Link href="#Education" title={<li><span><FaUserGraduate/></span>&nbsp;&nbsp;&nbsp;&nbsp;EductionalDetails</li>}></Link><br/>
                <Link href="#Portfolio" title={<li><span><AiFillPropertySafety/></span>&nbsp;&nbsp;&nbsp;&nbsp;Portfolio</li>}></Link><br/>
                <Link href="#Contact" title={<li><span><RiContactsBookFill/></span>&nbsp;&nbsp;&nbsp;&nbsp;Contact</li>}></Link>
            </Anchor>
          </ul>
      </div><br/>
      <div className="soci_me">
        <a href="https://www.facebook.com/profile.php?id=100007367647822" target="https://www.facebook.com/profile.php?id=100007367647822"><BsFacebook style={{fontSize:'29.5px'}}/></a>
        <RiInstagramFill style={{fontSize:'32px'}}/>
        <IoLogoWhatsapp style={{fontSize:'32px'}}/>
        <AiFillTwitterCircle style={{fontSize:'32px'}}/>
      </div>
     
    </div>
    </>
  )
}
export default Navbar;