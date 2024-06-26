import {React, useEffect} from 'react'
import cleanSolarEnergy from '../Assets/Images/clean-commercial-energy.avif'
import commercialBenefits from '../Assets/Images/commercial-solar-benefits.avif'
import CTA from './CTA'
import AOS from "aos";

function Commercialsolar() {

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
              Commercial Solar Solutions
              </h6>
              <h2 className="site-heading mb-3">Maximizing Your Business's Energy Potential</h2>
              
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
              <h2 className="regular-heading mb-3 " data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Commercial Solar Solutions</h2>
              <p style={{textAlign: 'left'}} data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Understanding the diverse energy needs of businesses, we specialize in delivering tailored commercial solar solutions designed to optimize energy usage and drive cost savings. Our comprehensive approach helps businesses reduce energy costs significantly while also minimizing their environmental impact and bolstering their market presence. Additionally, for businesses operating primarily during daytime hours, our solutions offer even greater savings potential. With our advanced and highly efficient solar solutions, businesses can enjoy enhanced energy security and financial stability. <br /><br />Whether you're a small local business or a large-scale enterprise, we craft solar PV solutions that deliver substantial operational cost reductions. Our commitment to delivering cutting-edge and cost-effective solar solutions, combined with our experience in managing projects of all sizes, establishes us as a leading player in the solar industry.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clean-commercial-energy py-4" style={{backgroundColor: '#f1f3fb'}}>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h6 className="subtitle">Cleaner Energy</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Fueling Your Business With Clean Energy</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Businesses can enhance their environmental footprint while reducing energy costs. Our company is dedicated to supporting businesses in adopting sustainable energy solutions through tailored commercial solar options. Our solutions offer clean, affordable energy, distinguishing your business and delivering long-term savings, reduced carbon emissions, and increased productivity by eliminating disruptions from power outages.<br /><br />We specialize in developing renewable energy systems that benefit both your business and the planet. Our designs prioritize financial benefits while maintaining environmental responsibility. With our renewable energy solutions, you can achieve cost savings while contributing to a greener, more sustainable future.</p>
            </div>

            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={cleanSolarEnergy} alt="clean-commercial-solar-solutions" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="clean-commercial-energy py-5" >
        <div className="container">
          <div className="row order-1 d-flex align-items-center">
            <div className="col-md-6" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              <img src={commercialBenefits} alt="clean-commercial-solar-solutions" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h6 className="subtitle">Perks Of Commercial Solar</h6>
              <h2 className="regular-heading mb-3" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Benefits Of Commercial Solar Solutions</h2>
              <p data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Commercial solar solutions provide a cost-effective and efficient method of electricity generation for businesses. This approach not only offers financial benefits but also promotes energy independence, boosts brand reputation, reduces carbon emissions, and contributes to environmental preservation by decreasing reliance on fossil fuels. Here are several advantages to consider when selecting solar solutions for your business:</p>
              <ul style={{lineHeight: '2.5rem'}}>
                <li data-aos="fade-up" data-aos-P
                offset="200" data-aos-duration="1200">Continuous energy availability</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Tailored solar solutions aligned with your energy needs</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Dependable with significant returns on investment</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Decrease in energy expenses</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Minimized environmental impact</li>
                <li data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Elevated brand image</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTA />


    </div>
  )
}

export default Commercialsolar
