import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import testimonialbg from "../Assets/Images/commercial-solar-solutions.avif"
import Client from '../Assets/Images/client.avif'

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="testimonial-bg py-4" style={{backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      {/* {/ <div className="testimonial-bg py-4" style={{ backgroundImage: `url(${testimonialbg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "bottom center" }}> /} */}
      <div>
        <div className="container-xxl">
          <div
            className="text-center mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h6 className="subtitle">Testimonials</h6>
            <h2 className="regular-heading" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
              What Our Clients Say!
            </h2>
          </div>
          <div>
            <div>
              <div className="container test-container" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1200">
                <div className="test-overlay">
                <div className="testimonial-carouse">
                  <Slider {...settings} className="testimonial-carousel py-5">
                    <div className="col-md-12 ">
                      <div className="testimonial-item text-center">
                        <img
                          className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                          src={Client}
                          style={{ width: "100px", height: "100px" }}
                          alt="client"
                        />
                        <div className="testimonial-text p-4 rounded text-center ">
                          <div>
                            <p className="fw-bold">
                            Switching to solar with PEES Solar was our best move yet. Great savings and amazing support!
                            </p>
                          </div>
                          <h5 className="mb-1 text-white">Nimra Ihsan </h5>
                          <span className="fst-italic text-white">Manager HR <span> (The Educators)</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="testimonial-item text-center">
                        <img
                          className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                          src={Client}
                          style={{ width: "100px", height: "100px" }}
                          alt="client"
                        />
                        <div className="testimonial-text p-4 rounded text-center ">
                          <p className="fw-bold">
                          Thanks to this company, going solar was a breeze. Professional, knowledgeable, and always there to help.
                          </p>
                          <h5 className="mb-1 text-white">Asim Rasool</h5>
                          <span className="fst-italic text-white">Director <span> (Apex College)</span></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 justify-content-center">
                      <div className="testimonial-item  text-center">
                        <img
                          className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                          src={Client}
                          style={{ width: "100px", height: "100px" }}
                          alt="client"
                        />
                        <div className="testimonial-text p-4 rounded text-center ">
                          <p className="fw-bold">
                          No more power outages thanks to their solar solution. Couldn't be happier!
                          </p>
                          <h5 className="mb-1 text-white">Sikandar Nawaz Cheema</h5>
                          <span className="fst-italic text-white">
                            Principal <span> (Falcon Central School)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="testimonial-item  text-center">
                        <img
                          className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                          src={Client}
                          style={{ width: "100px", height: "100px" }}
                          alt="client"
                        />
                        <div className="testimonial-text p-4 rounded text-center ">
                          <p className="fw-bold">
                          Impressive ROI with their commercial solar services. Their support is top-notch.
                          </p>
                          <h5 className="mb-1 text-white">Faizan Minhas</h5>
                          <span className="fst-italic text-white">
                            General Manager <span> (Dar e Arqam Schools)</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {/ <!-- Testimonial End --> /} */}
      </div>
    </div>
  );
}
