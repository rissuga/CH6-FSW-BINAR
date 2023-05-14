import menuIcon from './../assets/icon_menu.svg'

const Navigation = ()=>{
    return (
        <div>
            <div className="header bg__grey fixed-top">
                <nav className="container bg-grey py-2">
                    <div id="logo"></div>
                    <ul class="flex-row gap-32 no-mp nav-list">
                        <li><a className="link-no-decoration font__size__14" href="/#">Our Services</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#">Why Us</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#">Testimonial</a></li>
                        <li><a className="link-no-decoration font__size__14" href="/#">FAQ</a></li>
                        <li><button className="btn btn-success">Register</button></li>
                    </ul>
                    <button id="sidebar-menu" className="btn-burger-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <img src={menuIcon} alt="icon menu" width="24" height="24"/>
                    </button>
                </nav>
            </div>
            <div className="offcanvas offcanvas-end reset" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"><b>BCR</b></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="flex-column no-mp">
                            <li><a className="link-no-decoration font-size-14" href="#services">Our Services</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#">Why Us</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#">Testimonial</a></li>
                            <li><a className="link-no-decoration font-size-14" href="/#">FAQ</a></li>
                            <li><button className="btn btn-success font__size__14">Register</button></li>
                    </ul>
                </div>
            </div>
        
        </div>
        
    );
}


export default Navigation;
