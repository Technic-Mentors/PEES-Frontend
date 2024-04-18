import React from 'react'
import { Link } from 'react-router-dom'


function CTA() {
  return (
    <div>
      <section className="call-to-action py-5">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-9">
                    <h2 className="site-heading text-white">
                    Take the First Step Towards Solar Success
                    </h2>
                </div>
                <div className="col-md-3">
                    <Link to="/contact"><button className="website-button">Contact Us</button></Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
