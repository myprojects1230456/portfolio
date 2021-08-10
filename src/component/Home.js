import { div } from 'prelude-ls'
import React from 'react'
import { NavLink } from 'react-router-dom'
import tomatar from "../images/tomato.png";

const Home = () => {
    return(
        <div class="container" pt-xxl-5 >
        <div class="child"></div>
              <section className="agalbagal" ms-auto>
      <div className="container mt-5" ms-auto>
          <div className="signup-content">
      <div className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <form className=" register-form" id="register-form">
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
              
          </form>
          <div className="signup-image">
              <figure>
                  <img src ={tomatar} alt =" registration pic" height="300" width="200"/>
              </figure>
              <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
          </div>
      </div>
          </div>
          </div>"
          </section>
          </div>
    )
}
export default Home 