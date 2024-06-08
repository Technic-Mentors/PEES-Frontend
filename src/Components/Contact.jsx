import {React, useEffect, useRef} from 'react'
import AOS from "aos";
import emailjs from "emailjs-com";


function Contact() {

  useEffect(() => {
    AOS.init();
  }, []);

  // const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const subjectI = document.getElementById("subjectI");
    const messageI = document.getElementById("messageI");

    let hasError = false;

    if (!name) {
      nameI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      nameI.innerText = "";
    }

    if (!email) {
      emailI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      emailI.innerText = "";
    }

    if (!subject) {
      subjectI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      subjectI.innerText = "";
    }

    if (!message) {
      messageI.innerText = "Please fill this field ";
      hasError = true;
    } else {
      messageI.innerText = "";
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm(
        "service_9x25qjf",
        "template_wev39ct",
        formRef.current,
        "ZFbDufHGULjHKZGqF"
      )

      // .then((response) => {
      //   formRef.current.reset();
      //   setSuccessMessage("Your Message Is Sent Successfully");
      //   setTimeout(() => {
      //     setSuccessMessage("");
      //   }, 3000);
      // });
  };

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
                <h6 className="subtitle">Contact Us</h6>
              <h2 className='regular-heading mb-3' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Have Questions or Ready to Get Started? Reach Out to Us Below!</h2>
              <p className='mb-3' data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">Fill out the form below, and one of our representatives will be in touch shortly to assist you with your solar needs.</p>
              </div>
              </div>
            </div>
          
            <div className="col-md-7" data-aos="fade-right" data-aos-offset="200" data-aos-duration="1200">
            <div class="row d-flex input-container align-items-center">
			<div class="col-xs-12" onSubmit={sendEmail}>
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

            <div className="col-md-5" data-aos="fade-left" data-aos-offset="200" data-aos-duration="1200">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.476308141146!2d74.24130233965214!3d31.43838859587764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901bd160d9003%3A0x558b023520d11e45!2sWAPDA%20Town%20Wapda%20Town%20Phase%202%20WAPDA%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717823960546!5m2!1sen!2s" width="500" height="450" style={{border:"0"}} title='Location' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
