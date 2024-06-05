import {React, useEffect} from "react";
import AgriculturalSolutions from "../Assets/Images/agricultural-solar-services.avif";
import AgriculturalSolarTubeWell from '../Assets/Images/agriculture-solar-tubewell.avif'
import CTA from "./CTA";
import AOS from "aos";


function Agriculturalsolar() {


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="inner-page-header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle">Agricultural Solar Solutions</h6>
              <h2 className="site-heading mb-3">
                Harnessing Solar Power For Farming Success
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
              <h2 className="site-heading mb-3 " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Agricultural Solar Solutions
              </h2>
              <p style={{ textAlign: "left" }} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                The agricultural sector plays a vital role in Pakistan's
                economy, contributing approximately 23% to the GDP. This sector
                relies heavily on key crops such as wheat, rice, and cotton, as
                well as farm operations. Nearly half of Pakistan's population is
                directly or indirectly linked to agriculture, making it a
                cornerstone of the economy. However, the sector faces
                challenges, particularly regarding access to reliable power for
                irrigation and farm operations, hindering optimal productivity.
                <br />
                <br />
                Recognizing the unique needs of farmers in Pakistan, we offer
                tailored agricultural solutions designed to address these
                challenges. Our solar solutions provide a dependable and
                sustainable source of electricity, enabling efficient crop
                irrigation and farm operations at a cost-effective rate. Whether
                in areas with limited access to electricity or facing high
                utility costs, our solutions offer a viable alternative. By
                harnessing solar energy, our solar tube well systems reduce
                dependence on the unstable energy grid, lowering carbon
                emissions and promoting environmental sustainability while
                empowering farmers to contribute to a greener future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="clean-commercial-energy py-5"
        style={{ backgroundColor: "#f1f3fb" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle">Solar Energy For Agriculture</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Solar Tube Well Systems: Dependable And Sustainable
              </h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                Addressing water scarcity and the exorbitant costs associated
                with diesel and petrol for groundwater extraction poses a
                significant challenge for farmers in maintaining adequate
                irrigation for their lands. However, our team at PEES Solar
                specializes in implementing tailored solar tube well solutions
                to address these issues. Our solar tube well systems are
                accompanied by two years of comprehensive after-sales service
                and an impressive 25-year panel warranty. Our goal is to ensure
                that our farming community can sustain lush and productive lands
                without the burden of excessively high electricity expenses.
                <br />
                <br />
                With years of experience, we possess expertise in installing
                solar tube well systems in various environments. Our commitment
                to adhering to Environmental, Safety, and Health (ESH) standards
                is unwavering as we deploy solar systems for agricultural
                purposes.
              </p>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={AgriculturalSolutions}
                alt="clean-commercial-solar-solutions"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="clean-commercial-energy py-5"
        
      >
        <div className="container">
          <div className="row d-flex align-items-center">
          <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img
                src={AgriculturalSolarTubeWell}
                alt="clean-commercial-solar-solutions"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h6 className="subtitle">Explore Our</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              Farm-Based Solar PV Solutions
              </h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              We offer sustainable and cost-effective electric solutions for all types of farms, including dairy, fish, and poultry farms. Our solar solutions for farms can save up to 70% on electricity bills. Customer satisfaction is our top priority, and that's why our clients report achieving Return on Investment (ROI) in just 4-5 years.
                <br />
                <br />
                Our solar sheds also provide a fantastic energy option with dual benefits. With our solar shed solutions, we design systems to harness energy from the sun, providing electricity while also offering shelter for your livestock. This innovative approach ensures that your farm not only meets its energy needs efficiently but also provides a comfortable space for your animals. Choose reliable and eco-friendly solutions tailored to the diverse farming landscape in Pakistan.
              </p>
            </div> 
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default Agriculturalsolar;
