import React from 'react';
import "../style/Home.css"

const Home = () => {
  return (
    <div id="loginregister" className="container-fluid">
    <div className="row">
      <a id="image-container" className="col-md-6" href="/product">
        <h3 className="text-center">SHOP NOW</h3>


        
      </a>
      <a id="phone-container" className="col-md-6" href="/product">
        <h3 id="phone_label" className="text-center">SHOP NOW</h3>
        <h1 className="text-center">PHONE</h1>
      </a>
</div>
</div>

  );
};

export default Home;
