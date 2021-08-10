import { tomato } from 'color-name';
import { div } from 'prelude-ls'
import { NavLink } from 'react-router-dom'
import React from 'react';
import tomatar from "../images/tomato.png";
import "./bootstrap.css";
import "../App.css";


const Signup = () => {
    return(
    <>
    <section className="agalbagal">
        <div className="form">
           
    <div className="form-group" >
                  <label htmlFor="name">
                  <i class="zmdi zmdi-youtube material-icons-name"></i>
                  </label>
                  <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"/>
              </div>
      
              <div className="form-group">
                  <label htmlFor="Email">
                  <i class="zmdi zmdi-youtube"></i>
                  </label>
                  <input type="text" name="Email" id="Email" autoComplete="off" placeholder="Your Email"/>
              </div>
      
              <div className="form-group">
                  <label htmlFor="Phone-Number">
                  <i class="zmdi zmdi-youtube"></i>
                  </label>
                  <input type="text" Phone-Number="name" id="Phone-Number" autoComplete="off" placeholder="Your Phone Number"/>
              </div>
      
              <div className="form-group">
                  <label htmlFor="work">
                  <i class="zmdi zmdi-youtube"></i>
                  </label>
                  <input type="text" name="work" id="work" autoComplete="off" placeholder="Your Work"/>
              </div>
      
              <div className="form-group">
                  <label htmlFor="password">
                  <i class="zmdi zmdi-youtube"></i>
                  </label>
                  <input type="text" name="password" id="password" autoComplete="off" placeholder="Your Password"/>
              </div>
              <div className="form-group">
                  <label htmlFor="cpassword">
                  <i class="zmdi zmdi-youtube"></i>
                  </label>
                  <input type="text" name="cpassword" id="cpassword" autoComplete="off" placeholder="Conferm your Password"/>
              </div>
      <div className="form-group form-button">
          <input type="submit" name="signup" id="signup" value="Register"/>
      </div>
      </div>
     
          <div className="signup-image">
              <figure>
                  <img src ={tomatar} alt =" registration pic" height="300" width="200"/>
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
          </div>
         
     
    </section>
     </>
    )
}
export default Signup