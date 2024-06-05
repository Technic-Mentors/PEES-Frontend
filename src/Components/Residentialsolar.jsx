import {React, useEffect} from "react";
import ROIResidentialSolar from '../Assets/Images/return-on-investment-in-residential-solar.avif'
import ResidentialSolar from '../Assets/Images/residential-solar-services.avif'
import benefitsOfSolar from '../Assets/Images/benefits-of-installing-solar-system-at-home.png'
import CTA from "./CTA";
import AOS from "aos";


function Residentialsolar() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="inner-page-header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle">Residential Solar Solutions</h6>
              <h2 className="site-heading mb-3">
                Empowering Your Home With Clean Energy
              </h2>

              {/* <Link to="get-a-quote"><button className="website-button" style={{backgroundColor: 'var(--secondary-color)'}}>Get A Quote</button></Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="commercial-solar-service py-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-9 text-center">
              <h6 className="subtitle " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Explore Our</h6>
              <h2 className="regular-heading mb-3 " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Residential Solar Solutions
              </h2>
              <p style={{ textAlign: "left" }} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                We specialize in delivering reliable, sustainable, and
                affordable solar solutions for your home. We understand that
                managing ever-increasing electricity bills every month can be
                challenging. That's why we provide cost-effective and
                state-of-the-art home solar solutions designed to not only
                reduce your bills but also enhance your savings, ensuring peace
                of mind for decades to come. At our company, we prioritize
                quality without compromise. We utilize the most advanced solar
                panels and inverters available to guarantee you receive the
                maximum return on your investment. Our residential solar
                solutions offer numerous benefits. <br />
                <br />
                They can significantly reduce your electricity bill by up to
                70%, protect you from extended periods of load-shedding, and
                deliver free electricity for years ahead. Our customer-centric
                approach begins with a personalized consultation to fully
                comprehend your requirements. From there, we recommend the
                optimal solutions for your home, seamlessly aligning with your
                energy needs. Because at our company, your satisfaction is our
                top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-commercial-energy py-5" style={{backgroundColor: '#f1f3fb'}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle">Cost Reduction</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Optimize Returns And Expedite Payback Time</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Businesses can enhance their environmental footprint while reducing energy costs. Our company is dedicated to supporting businesses in adopting sustainable energy solutions through tailored commercial solar options. Our solutions offer clean, affordable energy, distinguishing your business and delivering long-term savings, reduced carbon emissions, and increased productivity by eliminating disruptions from power outages.<br /><br />We specialize in developing renewable energy systems that benefit both your business and the planet. Our designs prioritize financial benefits while maintaining environmental responsibility. With our renewable energy solutions, you can achieve cost savings while contributing to a greener, more sustainable future.</p>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={ROIResidentialSolar} alt="clean-commercial-solar-solutions" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="clean-commercial-energy py-5" >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={ResidentialSolar} alt="clean-commercial-solar-solutions" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h6 className="subtitle">Custom Designed Home Solar</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Cutting-Edge Custom Home Solar Solutions</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Our tailored solar solutions are crafted to deliver exceptional performance, potentially eliminating your electricity bill altogether, all while remaining cost-effective. We offer on-grid and hybrid solutions customized to match your home's specific requirements and annual energy usage. With the inclusion of net metering in our personalized home solar solution, you can even sell excess generated electricity back to the grid, effectively doubling your savings. <br /><br />Our dedication lies in providing you with a system precisely tailored to your needs and preferences, all at a competitive price point. This strategy ultimately enhances your return on investment (ROI).</p>
            </div>

          </div>
        </div>
      </section>

      <section className="clean-commercial-energy py-5" style={{backgroundColor: '#f1f3fb'}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle">Benefits Of Residential Solar</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Why Installing Solar System At Home?</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Solar power presents a cost-effective, efficient, and reliable option for generating electricity in residential settings. This renewable energy source not only offers financial savings but also fosters energy independence, mitigates carbon emissions, and contributes to environmental conservation by reducing reliance on fossil fuels. Consider the following advantages when opting for solar energy for your home:</p>
              <ul style={{lineHeight: '2.5rem'}}>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Reduced electricity bills</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Environment friendly</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Reduced maintenance costs</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Energy independence</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Increased property value</li>
              </ul>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={benefitsOfSolar} alt="clean-commercial-solar-solutions" className="img-fluid" />
            </div>

          </div>
        </div>
      </section>

      <CTA />

    </div>
  );
}

export default Residentialsolar;
