import React from 'react'
import { Link } from 'react-router-dom'
import PEESWhite from '../Assets/Images/PEES-Final-White.png'

function Footer() {
  return (
    <div>
<footer className=" text-lg-start bg-body-tertiary text-white" style={{backgroundColor: 'var(--secondary-color)'}}>
    

  <section className="py-4">
    <div className="container text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <Link to='/' className="text-uppercase fw-bold mb-4">
            <img src={PEESWhite} alt="" className="img-fluid mb-3" style={{height: '65px'}}/>
          </Link>
          <p>
          As pioneers in sustainable energy solutions, we are dedicated to illuminating the path towards a brighter, cleaner future. 
          </p>
        </div>
        
        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Our Solutions
          </h6>

          <ul className='footer-services-list' style={{padding: '0', margin: '0', listStyle: 'none', lineHeight:'2.5rem'}}>
          <li><i class="fa-regular fa-circle-check"></i>&nbsp;
            <Link to="/industrial-solar" className="text-reset" style={{textDecoration: 'none'}}>Industrial Solar</Link>
          </li>
          <li><i class="fa-regular fa-circle-check"></i>&nbsp;
            <Link to="/commercial-solar" className="text-reset" style={{textDecoration: 'none'}}>Commercial Solar</Link>
          </li>
          <li><i class="fa-regular fa-circle-check"></i>&nbsp;
            <Link to="/residential-solar" className="text-reset" style={{textDecoration: 'none'}}>Residential Solar</Link>
          </li>
          <li><i class="fa-regular fa-circle-check"></i>&nbsp;
            <Link to="/agricultural-solar" className="text-reset" style={{textDecoration: 'none'}}>Agricultural Solar</Link>
          </li>
          </ul>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Mumtaz Market, G.T. Road Gujranwala, Punjab, Pakistan</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@pees.pk
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
 <section className="bottom py-3">

 <div className='text-center py-1 border-bottom'>
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
      
    </div>

  <div className="text-center mt-2" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>


    © 2024 Copyright Photonic Electronics & Engineering Services: <br /> Developed With <span style={{color: '#fff', fontSize: '20px'}}>&hearts;</span> By&nbsp;
    <a className="text-reset fw-bold" href="https://technicmentors.com/" style={{textDecoration: 'none'}}>Technic Mentors</a>
  </div>
  </section>
  
</footer>

    </div>
  )
}

export default Footer
