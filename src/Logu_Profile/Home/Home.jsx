import React, { useState } from 'react';
import Typical from 'react-typical';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useEffect , useRef} from 'react';
import './Home.css';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import {MdFileDownload} from 'react-icons/md';
import SendIcon from '@mui/icons-material/Send';
import Aos from 'aos';
import 'aos/dist/aos.css';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
import { AiTwotoneEdit } from 'react-icons/ai';
import imgas from '../../img/loganathan.jpeg';


const Home = () =>{
  const [updateImg,setUpdateImg]=useState([{imgas}]);
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

  const [imgView,setImgView] = useState([]);
  const [views,setViews] = useState(false);

  const form = useRef();
  const [done,setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_6diwoc9', 'template_9kxnnlg', form.current, 'BWP5VoMuHTSLMvlS6')
        .then((result) => {
            console.log(result.text);
            setDone(true);
          }, (error) => {
            console.log(error.text);
        });
        setView(false);
        e.target.reset();
    };

  const Loading = async() =>{
     const view = await axios.get("http://localhost:4000/image");
     setImgView(view.data);
  }

  useEffect(()=>{
     Loading();
     Aos.init({duration:2000});
  },[])

  function setfixed()
    {
        if(window.scrollY<=40)
        {
            setViews(false);
        }
        else
        {
            setViews(false);
        }
    }

    window.addEventListener("scroll",setfixed);


  return(
    <div id="Profile" className='h-container'>
      
      
      <div className="h-left">
        <h4>Hi My Name is</h4><br/>
        <h1><Typical loop={5} steps={["","Loganathan - P",5000]}/> </h1>
        <h3 style={{fontWeight:"bolder"}}>I'm Network Engineer</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm a technology professional who has the necessary skills to plan, implement and oversee the computer networks that support in-house voice, data, video and wireless network services</p>
        <br/>
        <div className='btn-contain'>
         <a href="loganathan.pdf" download="Loganathan_Resume.pdf"><Button color="secondary" variant="contained" startIcon={<MdFileDownload/>}>&nbsp;&nbsp;Get Resume</Button>&nbsp;&nbsp;</a>
          <Button variant="contained" color="success" endIcon={<SendIcon/>} onClick={()=>setViews(true)}>Contact Me</Button>
        </div>
      </div>

      {
        views ? <div className='dailog'>
        <h2 Align="center">Let's Get</h2>
        <h3 Align="center">Touch Me</h3>
        <form ref={form} Align="center" onSubmit={sendEmail}>
                    <TextField required label="Name" type="text" name="user_name" style={{width:'300px'}} id="outlined" size="small"/><br/><br/>
                    <TextField required label="Phone_Number" type="number" name="user_number" style={{width:'300px'}} id="outlined" size="small"/><br/><br/>
                    <TextField required label="Email" type="email" name="user_email" style={{width:'300px'}} id="outlined" size="small"/><br/><br/>
                    <TextField required label="Subject" type="text" name="user_subject" style={{width:'300px'}} id="outlined" size="small"/><br/><br/>
                    <TextField required label="Message" type="text" name="message" multiline rows={3} style={{width:'300px'}} id="outlined-textarea" size="small"/><br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/*<input Align="center" className="h-btn" type="submit" value="Send"/>*/}
                    <div style={{display:"flex",flexDirection:"row",textAlign:"center",marginTop:"-28px",marginLeft:"34%",gap:"50px"}}><Button variant="contained" endIcon={<SendIcon />} type="submit">Send</Button><p style={{position:"relative",top:"15px",fontWeight:"500",letterSpacing:"2px",textDecoration:"underline",color:"blue",cursor:"pointer"}} onClick={()=>setView(false)}>Exit</p></div>
                    <span>{done && alert("you message has been sent")}</span>
                </form>
      </div>:""
      }


      <div className="h-right">
        {
          updateImg.map((index)=>{
            return(
              <div data-aos="fade-left" className='h-sr'>
                <img src={index.src}/>
              </div>
            )
          })
        }
       <div className="photoUpdate">
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
       </div>
      </div>
    </div>
  )
}
export default Home;