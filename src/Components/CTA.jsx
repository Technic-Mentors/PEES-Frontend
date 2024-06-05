import React from 'react'
import { Link } from 'react-router-dom'


function CTA() {
  return (
    <div>
      <section className="call-to-action py-5">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-9 mb-3">
                    <h2 className="site-heading text-white">
                    Take the First Step Towards Solar Success
                    </h2>
                    <p className='lead text-white mt-3'>Start saving money and reducing your carbon footprint today by switching to solar energy solutions. Let us guide you on your journey to a brighter, greener future.</p>
                </div>
                <div className="col-md-3">
                    <Link to="/contact"><button className="website-button bg-white" style={{color: 'var(--secondary-color)'}}>Contact Us</button></Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
