import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import IndustrialSolarService from '../Assets/Images/industrial-solar-system.avif'
import customDesign from '../Assets/Images/custom-design.png'
import costReduction from '../Assets/Images/cost-reduction.png'
import energyIndependence from '../Assets/Images/energy-independent.png'
import environmentalSustainability from '../Assets/Images/environmental-sustainable.png'
import whyChooseUs from '../Assets/Images/why-choose-industrial-solar.avif'
import CTA from './CTA'
import AOS from "aos";

function Industrialsolar() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="inner-page-header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle">
              Industrial Solar Solutions
              </h6>
              <h2 className="site-heading mb-3">Empowering Your Business with Solar Energy</h2>
              
              {/* <Link to="get-a-quote"><button className="website-button" style={{backgroundColor: 'var(--secondary-color)'}}>Get A Quote</button></Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="industrial-solar-services py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Explore Our</h6>
              <h2 className="site-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Industrial Solar Solutions</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Welcome to our Industrial Solar Services, where we specialize in tailored solar solutions for industrial businesses. Our team is dedicated to optimizing energy usage, reducing costs, and enhancing sustainability through innovative solar technology. With a focus on customized design and installation, we work closely with each client to maximize efficiency and savings.<br /> From offsetting energy costs to enhancing resilience, we're here to guide you through every step of the process. Join us in embracing solar energy and shaping a brighter, greener future for your industrial facility.</p>
              <Link to="/industrial-solar"><button className="website-button" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Contact Us</button></Link>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={IndustrialSolarService} alt="industrial-solar-solutions" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="services-features py-5" style={{backgroundColor: '#f1f3fb'}}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Compelling Perks</h6>
              <h2 className="site-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">What Do You Get From Our Industrial Solar Solutions </h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-content text-center">
                <img src={customDesign} alt="" className="img-fluid" /><br /><br />
                <h5>Custom Design & Installation</h5><br />
                <p>Our expert team will work closely with you to design and install industrial-scale solar systems customized to your facility's unique requirements. From initial assessment to final installation, we ensure seamless integration and optimal performance.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-content text-center">
                <img src={costReduction} alt="" className="img-fluid" /><br /><br />
                <h5>Energy Cost Reduction</h5><br />
                <p>Harness the power of solar energy to significantly reduce your industrial facility's energy costs. By generating clean, renewable electricity onsite, you can minimize reliance on grid power and enjoy substantial savings over time.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-content text-center">
                <img src={energyIndependence} alt="" className="img-fluid" /><br /><br />
                <h5>Energy Independence And Resilience</h5><br />
                <p>Achieve energy independence and resilience with our industrial solar solutions. Solar power offers a reliable alternative to grid electricity, ensuring uninterrupted operation and mitigating the impact of utility outages or price fluctuations.</p>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <div className="feature-content text-center">
                <img src={environmentalSustainability} alt="" className="img-fluid" /><br /><br />
                <h5>Environmental Sustainability</h5><br />
                <p>Embrace solar energy to demonstrate your commitment to environmental sustainability. By reducing your carbon footprint and minimizing environmental impact, you can contribute to a cleaner, greener future for generations to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-industrial-solar py-5">
        <div className="container">
          <div className="row g-5 d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Why Choose Us</h6>
              <h2 className="site-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Compelling Reasons To Choose Us!
              </h2><br />
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">With a proven track record of industrial solar installations, we bring expertise and reliability to every project. Our commitment to custom solutions ensures that your industrial solar system meets your unique needs and goals.</p><br /><hr />
              <ul style={{lineHeight: '2'}}>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"><b>Expertise & Experience:</b>&nbsp;Benefit from our years of experience and expertise in industrial solar installations.</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"><b>Custom Solutions:</b>&nbsp;We understand the unique needs of industrial businesses and provide tailored solutions to maximize efficiency and savings.</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200"><b>Dedicated Support:</b>&nbsp;Count on our dedicated support team to guide you through every step of the process and ensure your solar project's success.</li>
              </ul>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={whyChooseUs} alt="why-choose-us" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <CTA />


    </div>
  )
}

export default Industrialsolar
