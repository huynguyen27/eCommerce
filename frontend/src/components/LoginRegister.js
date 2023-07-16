import React from 'react';
import "../style/LoginRegister.css"
const LoginRegister = () => {
  return (
    <div id="loginregister" className="container-fluid">
      <div className="row">
        <div className="col-md-6 py-5 bg-dark text-white">
          <h2 id="login_label" className="text-center">LOGIN</h2>
          <form>
            <div className="form-group pb-3">
              <input type="text" className="rounded-0 form-control form-outline text-white bg-dark" id="username" placeholder='EMAIL ADDRESS*' autocomplete="off" />
            </div>
            <div className="form-group pb-3">
              <input type="password" className="rounded-0 form-control form-outline text-white bg-dark" id="password" placeholder='PASSWORD*'/>
            </div>
          
            <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="remember_password" />
        <label className="form-check-label" htmlFor="rememberPassword">REMEMBER ME</label>
</div>
<div className="form-group ">
            </div>
            <a id="forgot_password" href="#">FORGOT PASSWORD?</a>

          <div className="text-center py-5">
          <a id="submit_button" href="#" >LOGIN</a>
          </div>
          </form>
        </div>
        <div className="col-md-6 py-5">
          <h2 id="register_label" className="text-center">CREATE AN ACCOUNT</h2>
          <form>
            <div className="form-group pb-3">
              <input type="text" className="rounded-0 form-control form-outline" id="register_username" placeholder="FIRST NAME*"/>
            </div>
            <div className="form-group pb-3">
              <input type="text" className="rounded-0 form-control form-outline" id="register_username" placeholder="LAST NAME*"/>
            </div>
            <div className="form-group pb-3">
              <input type="email" className="rounded-0 form-control form-outline" id="register_email" placeholder="EMAIL ADDRESS*" />
            </div>
            <div className="form-group pb-3">
              <input type="password" className="rounded-0 form-control form-outline" id="register_password" placeholder="PASSWORD*" />
            </div>
            <div className="form-group pb-3">
              <input type="password" className="rounded-0 form-control form-outline" id="register_confirmPassword" placeholder="CONFIRM PASSWORD*" />
            </div>
            
<div className="form-group ">
            </div>
<div className="text-center py-5">
          <a id="register_button" href="#" >REGISTER</a>
          </div>          </form>
        </div>
      </div>
    </div>
  );}

export default LoginRegister;
