import React from 'react'

const ourSevices = () => {
  return (
        <div id="services" className="our-services py-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 ps-5" >
                        <img src='./images/services/img_service.svg' alt="services-img" width="85%"/>
                    </div>
                    <div className="col-lg-6 py-5" >
                        <div className="content">
                            <h3 className="font__heading__2 mb-4"> Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                            <p className="font__size__14" style={{ width: '85%' }}>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <ul className="text-list font__size__14" style={{ paddingLeft: '0px' }}>
                                <li className="mb-3 "><img src='./images/services/icon_check.svg' alt="icon-check"/> &nbsp; Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                                <li className="mb-3 "><img src='./images/services/icon_check.svg' alt="icon-check"/> &nbsp; Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                                <li className="mb-3 "><img src='./images/services/icon_check.svg' alt="icon-check"/> &nbsp; Sewa Mobil Jangka Panjang Bulanan</li>
                                <li className="mb-3 "><img src='./images/services/icon_check.svg' alt="icon-check"/> &nbsp; Gratis Antar - Jemput Mobil di Bandara</li>
                                <li className="mb-3 "><img src='./images/services/icon_check.svg' alt="icon-check"/> &nbsp; Layanan Airport Transfer / Drop In Out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ourSevices
