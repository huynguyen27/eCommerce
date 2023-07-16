import React, { useState } from 'react';
import "../style/LoginRegister.css"

const LoginRegister = () => {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  const [emailRegister, setEmailRegister] = useState('');
  const [firstNameRegister, setFirstNameRegister] = useState('');
  const [lastNameRegister, setLastNameRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // to be updated
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // to be updated
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // to be updated
  };

  return (
    <div id="loginregister" className="container-fluid">
      <div className="row">
        <div className="col-md-6 py-5 bg-dark text-white">
          <h2 id="login_label" className="text-center">LOGIN</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group pb-3">
              <input
                type="text"
                value={emailLogin}
                onChange={(e) => setEmailLogin(e.target.value)}
                className="rounded-0 form-control form-outline text-white bg-dark"
                id="username"
                placeholder='EMAIL ADDRESS*' autocomplete="off"/>
            </div>
            <div className="form-group pb-3">
              <input
                type="password"
                value={passwordLogin}
                onChange={(e) => setPasswordLogin(e.target.value)}
                className="rounded-0 form-control form-outline text-white bg-dark"
                id="password"
                placeholder='PASSWORD*' />
            </div>

            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="remember_password" />
              <label className="form-check-label" htmlFor="rememberPassword">REMEMBER ME</label>
            </div>
            <div className="form-group ">
            </div>
            <a id="forgot_password" href="/" onClick={handleForgotPassword}>FORGOT PASSWORD?</a>

            <div className="text-center py-5">
              <a id="submit_button" href="/" >LOGIN</a>
            </div>
          </form>
        </div>
        <div className="col-md-6 py-5">

          <h2 id="register_label" className="text-center">REGISTER</h2>
          <form onSubmit={handleRegister}>

            <div className="form-group pb-3">
              <input
                type="text"
                value={firstNameRegister}
                onChange={(e) => setFirstNameRegister(e.target.value)}
                className="rounded-0 form-control form-outline"
                id="register_username"
                placeholder="FIRST NAME*" />
            </div>
            <div className="form-group pb-3">
              <input
                type="text"
                value={lastNameRegister}
                onChange={(e) => setLastNameRegister(e.target.value)}
                className="rounded-0 form-control form-outline"
                id="register_username"
                placeholder="LAST NAME*" />
            </div>
            <div className="form-group pb-3">
              <input
                type="email"
                value={emailRegister}
                onChange={(e) => setEmailRegister(e.target.value)}
                className="rounded-0 form-control form-outline" id=
                "register_email" placeholder="EMAIL ADDRESS*" />
            </div>
            <div className="form-group pb-3">
              <input
                type="password"
                value={passwordRegister}
                onChange={(e) => setPasswordRegister(e.target.value)}
                className="rounded-0 form-control form-outline"
                id="register_password" placeholder="PASSWORD*" />
            </div>
            <div className="form-group pb-3">
              <input
                type="password"
                value={confirmPasswordRegister}
                onChange={(e) => setConfirmPasswordRegister(e.target.value)}
                className="rounded-0 form-control form-outline"
                id="register_confirmPassword" placeholder="CONFIRM PASSWORD*" />
            </div>

            <div className="form-group ">
            </div>
            <div className="text-center py-5">
              <a id="register_button" href="/" >REGISTER</a>
            </div>          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
