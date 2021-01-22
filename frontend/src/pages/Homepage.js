import React, { Component } from 'react';
import './Homepage.css';
// import background from "../assets/barbershop.jpg";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homepage"> 
          <header id="showcase">
            <h1>Welcome To Lux Lab</h1>
            <p>We are ready to serve. Book an appointment and get the best service.</p>
            <a href="/events" className="button">Book Now</a>
          </header>

          <section id="section-a">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur.</p>
          </section>

          <section id="section-b">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit minus impedit maxime, quae soluta quis cumque perferendis! Doloribus quaerat, placeat iste facere, aspernatur ex cum veritatis.</p>
          </section>
          <section id="section-c">
            <div className="box-1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
            </div>
            <div className="box-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
            </div>
            <div className="box-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
            </div>
          </section>

        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
