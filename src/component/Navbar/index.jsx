import styles from './index.module.css';

const Navigation = ()=>{
    return (
        <div>
            <div className="header bg__grey fixed-top">
                <nav className="container bg-grey py-2">
                    <div id="logo"></div>
                    <ul className="flex-row gap-32 no-mp nav-list">
                        <li><a className="link-no-decoration font__size__14" href="/#services">Our Services</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#whyUs">Why Us</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#testimonial">Testimonial</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#faq">FAQ</a></li>
                        <li><button className={styles.btn__success}>Register</button></li>
                    </ul>
                    <button id="sidebar-menu" className={styles.btn__menu} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img src='./images/icon_menu.svg' alt="icon menu" width="24" height="24"/>
                    </button>
                </nav>
            </div>
            <div className="offcanvas offcanvas-end reset" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"><b>BCR</b></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="flex-column no-mp">
                            <li><a className="link-no-decoration font-size-14" href="#services">Our Services</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#whyUs">Why Us</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#testimonial">Testimonial</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#faq">FAQ</a></li>
                            <li><button className={styles.btn__success}>Register</button></li>
                    </ul>
                </div>
            </div>
        
        </div>
        
    );
}


export default Navigation;
