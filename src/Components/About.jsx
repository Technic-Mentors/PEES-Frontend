import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import About1 from '../Assets/Images/about-us-img-1.avif'
import About2 from '../Assets/Images/about-us-img-2.avif'
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VerifiedIcon from '@mui/icons-material/Verified';
import Testimonials from './Testimonials'

function About() {

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (accordionId) => {
    setOpenAccordion(accordionId === openAccordion ? null : accordionId);
  };
  return (
    <div>
      <section className="inner-page-header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle">
              Know Our Story
              </h6>
              <h2 className="site-heading mb-3">Empowering Tomorrow With GoSolar </h2>
              
              {/* <Link to="get-a-quote"><button className="website-button" style={{backgroundColor: 'var(--secondary-color)'}}>Get A Quote</button></Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="container py-5">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-md-7">
              <h5 className="subtitle">Leading The Solar Revolution</h5>
              <h2 className="site-heading">
                We Brighten Your Future!
              </h2>
              <p>As pioneers in sustainable energy solutions, we are dedicated to illuminating the path towards a brighter, cleaner future. With a focus on innovation and environmental stewardship, we specialize in designing and implementing cutting-edge solar installations for homes, businesses, and communities. <br /><br />Our passion for renewable energy drives us to deliver reliable, cost-effective solutions that not only reduce carbon footprints but also empower our customers to take control of their energy needs. Join us in harnessing the power of the sun and shaping a sustainable tomorrow for generations to come.</p> <br />
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className='d-flex stat-content'>
                  <i class="fa-solid fa-lightbulb stat-icon fa-3x"></i>&nbsp;
                <h5 className='fw-bold'>Innovative Technology</h5>
                  </div>
                <br />
                <ul style={{listStyle: 'none'}}>
                  <li>
                  Explore the latest advancements in solar technology with our cutting-edge solutions.
                  </li>
                </ul>
                </div>
                <div className="col-md-6 col-12  align-items-center">
                  <div className='d-flex align-items-center stat-content'>
                  <i class="fa-solid fa-lightbulb stat-icon fa-3x"></i>&nbsp;
                <h5 className='fw-bold'>Dedicated Support</h5>
                  </div><br />
                  <ul style={{listStyle: 'none'}}>
                  <li>Access round-the-clock support from our team of solar experts, ensuring a seamless experience from start to finish.</li>
                  </ul>  
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-images">
                <img src={About1} alt="" className="img-fluid about-img-1" />
                <img src={About2} alt="" className="img-fluid about-img-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission-vision" style={{backgroundColor: '#f1f3fb'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mv-card">
              <div className="card company-card">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <TrackChangesIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Our Mission</h5>
                  <p>
                  Our mission is to empower global communities through accessible, sustainable energy solutions that pave the way for a brighter future.
                  </p>
                </div>
              </div>
              </div>

              
            </div>

            <div className="col-md-4 mv-card">
              <div className="card company-card">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <RemoveRedEyeIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Our Vision</h5>
                  <p>
                  We envision leading the renewable energy revolution, driving a brighter, greener tomorrow for generations to come.
                  </p>
                </div>
              </div>
              </div>

              
            </div>

            <div className="col-md-4 mv-card">
              <div className="card company-card">
              <div className="feature-icon-box">
                <div className="d-flex justify-content-center">
                  <VerifiedIcon className="mb-3 icon-tile feature-icon" />
                </div>
                <div className="icon-text">
                  <h5>Focus On Quality</h5>
                  <p>
                  Quality is at the core of everything we do, ensuring reliability and satisfaction with every solar installation we provide.
                  </p>
                </div>
              </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      <section className="about bg-white accord-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 about-col">
              <div className="overlay">
                <div className="p-5">
                  <div className="section-header mb-4">
                    <h6 className='subtitle text-white'>Uncover Solar Solutions</h6>
                    <h2 className="site-heading text-white">Unlocking Solar's Potential For Your Home Or Business</h2><br />
                    <p className='text-white'>Unlock the potential of solar energy and its transformative benefits. Explore common questions about solar system installation and its advantages below.</p>
                  </div>
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className={`accordion-item ${openAccordion === "One" ? "show" : ""}`}>
                      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          onClick={() => handleAccordionClick("One")}
                          aria-expanded={openAccordion === "One" ? "true" : "false"}
                        >
                          Q. How can solar energy reduce my electricity bills?
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className={`accordion-collapse collapse ${openAccordion === "One" ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                        Solar energy can significantly reduce your electricity bills by generating electricity from sunlight, which reduces your reliance on traditional utility providers. With net metering programs, you can even earn credits for excess energy produced by your solar panels, further reducing your costs.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${openAccordion === "Two" ? "show" : ""}`}>
                      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          onClick={() => handleAccordionClick("Two")}
                          aria-expanded={openAccordion === "Two" ? "true" : "false"}
                        >
                          Q. What are the environmental benefits of switching to solar power?
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className={`accordion-collapse collapse ${openAccordion === "Two" ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                        Switching to solar power reduces reliance on fossil fuels, which decreases greenhouse gas emissions and helps combat climate change. Solar energy production also requires minimal water and has a lower environmental impact compared to traditional energy sources.
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-item ${openAccordion === "Four" ? "show" : ""}`}>
                      <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          onClick={() => handleAccordionClick("Four")}
                          aria-expanded={openAccordion === "Four" ? "true" : "false"}
                        >
                          Q. How long does it take to install a solar system on my property?
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFour"
                        className={`accordion-collapse collapse ${openAccordion === "Four" ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingFour"
                      >
                        <div className="accordion-body">
                        The time it takes to install a solar system varies depending on factors such as the size of the system, your property's characteristics, and local regulations. On average, residential solar installations can take anywhere from a few days to a few weeks to complete.
                        </div>
                      </div>
                    </div>
                    <div className={`accordion-item ${openAccordion === "Five" ? "show" : ""}`}>
                      <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          onClick={() => handleAccordionClick("Five")}
                          aria-expanded={openAccordion === "Five" ? "true" : "false"}
                        >
                          Q. What financial incentives are available for solar system installation?
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseFive"
                        className={`accordion-collapse collapse ${openAccordion === "Five" ? "show" : ""}`}
                        aria-labelledby="panelsStayOpen-headingFive"
                      >
                        <div className="accordion-body">
                        Various financial incentives are available to encourage solar system installation, including federal tax credits, state and local rebates, and renewable energy incentives. These incentives can significantly reduce the upfront cost of installing a solar system and improve the return on investment over time.
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <Link to="/contact">
                    <button className="website-button mt-4 mb-4">Convert To Solar System</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 empty-col">

            </div>
          </div>
        </div>
      </section>

      <Testimonials />

    </div>
  )
}

export default About;
