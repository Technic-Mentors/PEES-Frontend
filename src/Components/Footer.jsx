import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
<footer className=" text-lg-start bg-body-tertiary text-white" style={{backgroundColor: 'var(--secondary-color)'}}>
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    
    <div>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="/#" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>PEES Solar
          </h6>
          <p>
          As pioneers in sustainable energy solutions, we are dedicated to illuminating the path towards a brighter, cleaner future. 
          </p>
        </div>
        
        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Services
          </h6>
          <p>
            <Link to="/industrial-solar" className="text-reset">Industrial Solar Solutions</Link>
          </p>
          <p>
            <Link to="/commercial-solar" className="text-reset">Commercial Social Solutions</Link>
          </p>
          <p>
            <Link to="/residential-solar" className="text-reset">Residential Solar Solutions</Link>
          </p>
          <p>
            <Link to="/agricultural-solar" className="text-reset">Agricultural Solar Solutions</Link>
          </p>
        </div>
       
        
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
 
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    © 2021 Copyright: <br /> Developed With Love By&nbsp;
    <a className="text-reset fw-bold" href="https://technicmentors.com/" style={{textDecoration: 'none'}}>Technic Mentors</a>
  </div>
  
</footer>

    </div>
  )
}

export default Footer
