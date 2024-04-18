import React from 'react'

function Contact() {
  return (
    <div>
      <section className="inner-page-header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="subtitle">
              Get In Touch
              </h6>
              <h2 className="site-heading mb-3">Reach Out To Us Today For Solar Solutions</h2>
              
              {/* <Link to="get-a-quote"><button className="website-button" style={{backgroundColor: 'var(--secondary-color)'}}>Get A Quote</button></Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form py-5">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-8">
              <div className="contact-title text-center">
              <h2 className='regular-heading mb-3'>Have Questions or Ready to Get Started? Reach Out to Us Below!</h2>
              <p className='mb-3'>Fill out the form below, and one of our representatives will be in touch shortly to assist you with your solar needs.</p>
              </div>
              </div>
            </div>
          
            <div className="col-md-7">
            <div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input" style={{float: "right"}}>
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
            </div>

            <div className="col-md-5">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d864479.7390796565!2d73.03124464687497!3d32.1806728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f290aaac0bc1d%3A0x5fe9f2902e3ba73b!2sTechnic%20Mentors!5e0!3m2!1sen!2s!4v1713428295002!5m2!1sen!2s" width="500" height="450" style={{border:"0"}} title='Location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
