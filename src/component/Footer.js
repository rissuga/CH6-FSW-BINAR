import iconFacebook from './../assets/footer/icon_facebook.svg';
import iconInstagram from './../assets/footer/icon_instagram.svg';
import iconTwitter from './../assets/footer/icon_twitter.svg';
import iconMail from './../assets/footer/icon_mail.svg';
import iconTwitch from './../assets/footer/icon_twitch.svg';
import logo from './../assets/logo.svg';


const footer = ()=>{
    return (
        <footer id="footer" className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <p className="font__size__14">
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                        </p>
                        <p className="font__size__14">
                        binarcarrental@gmail.com
                        </p>
                        <p className="font__size__14">
                        081-233-334-808
                        </p>
                    </div>
                    <div className="col-lg-2">
                        <p className="mb-2">
                        <a href="/#" target="_blank" className="text-dark text-decoration-none">Our Services</a>
                        </p>
                        <p className="mb-2">
                        <a href="/#" target="_blank" className="text-dark text-decoration-none">Why Us</a>
                        </p>
                        <p className="mb-2">
                        <a href="/#" target="_blank" className="text-dark text-decoration-none">testimonial</a>
                        </p>
                        <p className="mb-2">
                        <a href="/#" target="_blank" className="text-dark text-decoration-none">FAQ</a>
                        </p>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <p className="font__size__14">Connect With Us</p>
                        <a className="link-no-decoration " href="/#"> <img src={iconFacebook} alt=""/></a>
                        <a className="link-no-decoration ms-2" href="/#"> <img src={iconInstagram} alt=""/></a>
                        <a className="link-no-decoration ms-2" href="/#"> <img src={iconTwitter} alt=""/></a>
                        <a className="link-no-decoration ms-2" href="/#"> <img src={iconMail} alt=""/></a>
                        <a className="link-no-decoration ms-2" href="/#"> <img src={iconTwitch} alt=""/></a>
                    </div>
                    <div className="col-lg-3">
                        <p className="font__size__14">Copyright Binar 2022</p>
                        <a href="/#"><img src={logo} alt=""/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;
