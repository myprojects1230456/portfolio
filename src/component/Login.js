import React from 'react'
import "./bootstrap.css";
const Login = () => {
    return (
 
      <>
       
        <form class="form-horizontal">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label" value="Email"></label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email"></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label" value="Password"></label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password"></input>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
            <input type="checkbox" value="Remember me"/> 
               <label class="kool" value ="Remember me"/>Remember me 
                
               
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default" value="Sign in"></button>
          </div>
        </div>
      </form>
              
        </>
    )
}
export default Login