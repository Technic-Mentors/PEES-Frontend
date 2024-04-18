import { React, useEffect } from "react";
import AOS from "aos";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";
import About from "../Assets/Images/about-us-img.avif";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import Industrialsolution from '../Assets/Images/industrial-solar-solution.avif' 
import Commercialsolution from '../Assets/Images/commercial-solar-solutions.avif' 
import Resdentialsolution from '../Assets/Images/residential-solar-solutions.avif' 
import Agriculturalsolution from '../Assets/Images/agricultural-solar-solutions.avif'
// import Slider from "react-slick"; 
import Testimonials from "./Testimonials";

function Home() {

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="header-section">
        {/* <Navhome /> */}
        <div className="container ">
          <div className="row  d-flex align-items-center ">
            <div className="col-md-6 py-6">
              <h2 className="site-heading">
                Power Your Future With Limitless Solar Energy
              </h2>
              <p
                className="mt-3"
                style={{ fontWeight: "600", fontSize: "19px" }}
              >
                Discover the boundless potential of solar energy and light up
                your life with our innovative solutions.
              </p>
              <div
                className="phone d-flex mt-3 mb-4"
                style={{
                  backgroundColor: "rgba(0, 42, 76, 0.6)",
                  padding: "6px",
                  borderRadius: "10px",
                }}
              >
                <SupportAgentIcon style={{ color: "#fff", fontSize: "40px" }} />
                &nbsp;
                <p
                  style={{
                    marginTop: "5px",
                    alignItems: "center",
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: "600",
                  }}
                >
                  24/7 Customer Support: +92300 12 34 567
                </p>
              </div>
              <Link>
                <button className="website-button">Get A Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" style={{ backgroundColor: "" }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6 py-5">
            <h5 className="subtitle mb-2">Who We Are</h5>
              <h2 className="regular-heading">
                Empowering Communities, Building a Sustainable Future
              </h2>
              <p>
                Step into the future with GoSolar, where solar innovation meets
                sustainable living. We're not just a solar company; we're the
                architects of a greener tomorrow. Join us in redefining energy
                solutions for a world that demands both progress and
                preservation.
              </p>
              <img src={About} alt="" className="img-fluid mb-4" />
              <Link to="/contact">
                <button className="website-button">Go Solar Today</button>
              </Link>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 h-about">
                  <div className="card about-card">
                    <div className="card-body text-center">
                      <div className="icon-box">
                        <i class="fa-solid fa-leaf card-icon"></i>
                      </div>
                      <h5 className="mt-3">Environmental Friendliness</h5>
                      <p>Save your world with clean and green energy.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 h-about">
                  <div className="card about-card">
                    <div className="card-body text-center">
                      <div className="icon-box">
                        <ElectricMeterIcon
                          className="card-icon"
                          style={{ fontSize: "50px" }}
                        />
                      </div>
                      <h5 className="mt-3">
                        Energy
                        <br /> Independence
                      </h5>
                      <p>Save your world with clean and green energy.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6 h-about">
                  <div className="card about-card">
                    <div className="card-body text-center">
                      <div className="icon-box">
                        <i class="fa-solid fa-sack-dollar card-icon"></i>
                      </div>
                      <h5 className="mt-3">Immediate Cost Savings</h5>
                      <p>Save your world with clean and green energy.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 h-about">
                  <div className="card about-card">
                    <div className="card-body text-center">
                      <div className="icon-box">
                        <i class="fa-solid fa-plug-circle-xmark card-icon"></i>
                      </div>
                      <h5 className="mt-3">Minimization Of Downtime</h5>
                      <p>Save your world with clean and green energy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solar-services">
        <div className="services-overlay py-5">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-7 text-center">
                <h5 className="subtitle">Empower, Energize, Sustain</h5>
                <h2 className="regular-heading mb-4">Empowering Solutions for Every Sector, Explore Our Diverse Services</h2>
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-3">
                <div className="card service-card">
                  <div className="card-content">
                    <Link to="/industrial-solar">
                    <img src={Industrialsolution} alt="" className="img-fluid service-img mb-3" />
                    <hr style={{width: '100%'}}/>
                    <h5>Industrial Solar Solutions</h5>
                    <p className="mb-3"> Elevate your industrial operations with tailored solar solutions for sustainable energy excellence.</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card service-card">
                  <div className="card-content">
                  <Link to="/commercial-solar">
                    <img src={Commercialsolution} alt="" className="img-fluid service-img mb-3" />
                    <hr style={{width: '100%'}}/>
                    <h5>Commercial Solar Solutions</h5>
                    <p className="mb-3">Empower your business with cost-effective solar solutions tailored to your commercial needs.</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card service-card">
                  <div className="card-content">
                    <Link to="/residential-content">
                    <img src={Resdentialsolution} alt="" className="img-fluid service-img mb-3" />
                    <hr style={{width: '100%'}}/>
                    <h5>Residential Solar Solutions</h5>
                    <p className="mb-3">Transform your home into an energy-efficient haven with our personalized residential solar solutions.</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card service-card">
                  <div className="card-content">
                    <Link to="/agricultural-solar"> 
                    <img src={Agriculturalsolution} alt="" className="img-fluid service-img mb-3" />
                    <hr style={{width: '100%'}}/>
                    <h5>Agricultural Solar Solutions</h5>
                    <p className="mb-3">Harvest the power of the sun to drive agricultural productivity and sustainability on your farm.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="support">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <h5 className="subtitle">
              Count on Us Day or Night
              </h5>
              <h2 className="regular-heading mb-3">Don't Let Energy Concerns Keep You In The Dark</h2>
              <p className="mb-4 text-white">From sudden outages to questions about efficiency, we understand the frustrations that can arise with traditional energy sources. Our 24/7 support team ensures that you never feel alone in navigating these challenges. Reach out anytime for expert guidance and reliable solutions to keep your energy worries at bay.</p>
              <Link to="get-a-quote"><button className="website-button" style={{backgroundColor: 'var(--secondary-color)'}}>Get A Quote</button></Link>
            </div>
          </div>
        </div>
      </section>


      <section className="stats py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="stat-content text-center">
              <i class="fa-regular fa-handshake stat-icon fa-2x n mb-2"></i>
              <h2 className="site-heading">325</h2>
              <h6 className="fw-bold">Projects Completed</h6>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-content text-center">
              <i class="fa-solid fa-truck-fast stat-icon fa-2x "></i>
              <h2 className="site-heading">250</h2>
              <h6 className="fw-bold">Distributors</h6>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-content text-center">
              <i class="fa-solid fa-face-smile stat-icon fa-2x "></i>
              <h2 className="site-heading">1000</h2>
              <h6 className="fw-bold">Satisfied Customers</h6>
              </div>
            </div>

            <div className="col-md-3">
              <div className="stat-content text-center">
              <i class="fa-solid fa-briefcase stat-icon  fa-2x mb-2"></i>
              <h2 className="site-heading">20</h2>
              <h6 className="fw-bold">Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* <section className="why-choose-solar">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box">

              </div>
            </div>

            <div className="col-md-4">
              
            </div>

            <div className="col-md-4">
              
            </div>
          </div>
        </div>
      </section> */}


      <Testimonials />

 
    </div>
  );
}

export default Home;
