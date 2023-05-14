import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import testiMan from "./../assets/testimonial/man.svg";
import testiWomen from "./../assets/testimonial/women.svg";


const testimonials = ()=>{
   return(
    <OwlCarousel 
    className="owl-theme"
    center
    items={2}
    nav
    merge
    loop
    dots ={false}
    margin={30}>

        <div className="item d-flex bg__grey py-3" id='testimonial' >
              <img src={testiMan} alt="testi 1" className="mx-5"/>
              <div className="testi__info py-4 me-2">
                <div class="testi__rate d-flex mb-2">
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial' >
              <img src={testiWomen} alt="testi 1" className="mx-5"/>
              <div className="testi__info py-4 me-2">
                <div class="testi__rate d-flex mb-2">
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial'  >
              <img src={testiMan} alt="testi 1" className="mx-5"/>
              <div className="testi__info py-4 me-2">
                <div class="testi__rate d-flex mb-2">
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>
        <div className="item d-flex bg__grey py-3" id='testimonial'  >
              <img src={testiWomen} alt="testi 1" className="mx-5"/>
              <div className="testi__info py-4 me-2">
                <div class="testi__rate d-flex mb-2">
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i></a>
                      <a href="/#"><i class="bi bi-star-fill text-warning"></i> </a>
                </div>
                <p className="mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                <h6><b>John Dee 32, Bromo</b></h6>
              </div>
        </div>

    </OwlCarousel>
   )
   
}

export default testimonials;