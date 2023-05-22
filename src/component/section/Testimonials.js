import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

const options = {
  center: true,
  items: 3,
  nav: true,
  merge: true,
  loop: true,
  dots: false,
  margin: 30,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }

}

const testimonials = () => {
  return (
    <OwlCarousel
    className=" owl-theme"
    {...options}
    >

        <div className="item d-flex bg__grey py-3" id='testimonial' >
              <img src='./images/testimonial/man.svg' alt="testi 1" className="mx-4"/>
              <div className="testi__info py-4 me-4">
                <div className="testi__rate d-flex mb-2">
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial' >
              <img src='./images/testimonial/women.svg' alt="testi 1" className="mx-4"/>
              <div className="testi__info py-4 me-4">
                <div className="testi__rate d-flex mb-2">
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial'>
              <img src='./images/testimonial/man.svg' alt="testi 1" className="mx-4"/>
              <div className="testi__info py-4 me-4">
                <div className="testi__rate d-flex mb-2">
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial'>
              <img src='./images/testimonial/women.svg' alt="testi 1" className="mx-4"/>
              <div className="testi__info py-4 me-4">
                <div className="testi__rate d-flex mb-2">
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i className="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>

    </OwlCarousel>
  )
}

export default testimonials
