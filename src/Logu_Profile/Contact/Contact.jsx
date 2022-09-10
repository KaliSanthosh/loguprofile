import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { MdEmail } from 'react-icons/md';
import { MdWifiCalling } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import TextField from '@mui/material/TextField';
import imga from '../../img/location.png';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Aos from 'aos';



const Contact = () =>{

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
        e.target.reset();
    };

    useEffect(()=>{
      Aos.init({duration:1000})
    },[])

  const contacts=[{icon:<MdEmail/>,animation:"fade-right",content_1:"loganathan4694@gmail.com",content_2:"loganathan4694@mail.com"},
                  {icon:<MdWifiCalling/>,animation:"flip-up",content_1:"9500324650",content_2:"9080975543"},
                  {icon:<ImLocation2/>,animation:"fade-left",content_1:"Thudunganalli ( vill ), Sokkadi ( po )",content_2:"Krishnagiri"}]

  return(
    <div id="Contact" className="C-container">
      <div className="C-Main">
        <div className="C-1">
          <img src={imga}/>
        </div>
        <div className="C-2">
            <div style={{lineHeight:"20px",marginLeft:"-30px"}}>
                <h4 Align="center"  style={{marginTop:"10px"}}> -- LET'S TOUCH -- </h4>
                <h3 Align="center" style={{color:"orangered",fontSize:"25px"}}> Me</h3>
            </div>
             <form ref={form} onSubmit={sendEmail}>
                    <TextField label="Name" type="text" name="user_name" style={{width:'360px'}} id="outlined" size="small"/><br/><br/>
                    <TextField label="Phone_Number" type="number" name="user_number" style={{width:'360px'}} id="outlined" size="small"/><br/><br/>
                    <TextField label="Email" type="email" name="user_email" style={{width:'360px'}} id="outlined" size="small"/><br/><br/>
                    <TextField label="Subject" type="text" name="user_subject" style={{width:'360px'}} id="outlined" size="small"/><br/><br/>
                    <TextField label="Message" type="text" name="message" multiline rows={3} style={{width:'360px'}} id="outlined-textarea" size="small"/><br/><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/*<input Align="center" className="h-btn" type="submit" value="Send"/>*/}
                    <Button variant="contained" endIcon={<SendIcon />} type="submit">Send</Button>
                    <span>{done && alert("you message has been sent")}</span>
                </form>
         </div>
      </div>
      <div className="footer">
            {
              contacts.map((index)=>{
                return(
                  <div data-aos={index.animation} className="cards">
                    <span> {index.icon} </span>
                    <hr></hr>
                    <p>{index.content_1}<br/>{index.content_2}</p>
                    <p></p>
                  </div>
                )
              })
            }
      </div>
    </div>
  )
}
export default Contact;