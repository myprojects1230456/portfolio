import React from 'react'
import "../CSS/contact.css";
import contact from '../images/contact/contact.png'
import facebook from '../images/contact/facebook.png'
import whatsapp from '../images/contact/whatsapp.png'
import messanger from '../images/contact/messanger.png'
import man from '../images/contact/man.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
   
   faAngleDoubleRight,
   faVoicemail
   
  
    
} from '@fortawesome/free-solid-svg-icons'
import { 
   
} from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    return (
        <>
        <div className="contact-pic-class"><img src={contact} className="contact-pic-top"/></div>
        <div className="main-div">
            <div className="left-frame">
                <div className="contact-info">
                <div className="contact-information">Contact Information</div>
                <div className="contact-statement">Fill up the form and i will get back to you within 24 hours</div>
                </div>
               
                <div className="three-logoes">
                    <div className="facebook-div"><img src={facebook} className="contact-pic"/></div>
                    <div className="whatsapp-div"><img src={whatsapp} className="contact-pic"/></div>
                    <div className="messanger-div"><img src={messanger} className="contact-pic"/></div>
                </div>
                <div className="email-phone-main">
                    <div className="phone"><FontAwesomeIcon icon={faAngleDoubleRight} />+91-9570452922</div>
                    <div className="email"><FontAwesomeIcon icon={faAngleDoubleRight} />abhinavbgp@gmail.com</div>
                </div>
            </div>
            <div className="right-frame"><img src={man} className="man"/></div>
            <div className="man-photo"></div>
            <div className="contact-fill">
                <div className="form-name-row">
                <div className="Fname">First name <input type="text" className="textbook" placeholder="Enter your first name"></input></div>
                <div className="Fname">Last name <input type="text" className="textbook" placeholder="Enter your last name"></input></div>
                </div>
                <div className="form-name-row">
                <div className="Fname">E-mail <input type="text" className="textbook" placeholder="Enter your Email"></input></div>
                <div className="Fname">Phone  <input type="text" className="textbook" placeholder="Enter your phone number"></input></div>
                </div>
                <div className="service-requirement">
                    <div>What kind of service you want from us ?</div>
                    <div className="options">
                        <div><input type="checkbox" className="checkbook"></input>  Web Design</div>
                        <div><input type="checkbox" className="checkbook"></input>  Web Development </div>
                        <div><input type="checkbox" className="checkbook"></input>  Logo Design</div>
                        <div><input type="checkbox" className="checkbook"></input>  Other </div>
                        </div>
                   
                </div>

                <div className="fname1"><div>Message </div> <div><input type="text"  className="messagebook" placeholder="Enter your message here"></input></div></div>
            <button placeholder="Send Message" className="send-button"><span>Send </span><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
            </div>
        </div>
        
        </>
    )
}

export default Contact
{/* <a href="http://m.me/rathore1230456"> */}
{/* <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.650293143044!2d86.99243475!3d25.265116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f03774f6444faf%3A0xc59a271653c66815!2sDr%20Mithilesh%20Clinic!5e0!3m2!1sen!2sin!4v1634666293236!5m2!1sen!2sin" ></iframe> */}