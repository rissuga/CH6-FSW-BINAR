import React from 'react'
import Hero from './section/Hero'
import OurSevices from './section/Services'
import WhyUs from './section/WhyUs'
import Testimonials from './section/Testimonials'
import Banner from './section/Banner'
import FAQ from './section/Faq'

const LandingPage = () => {
  return (
        <div>
            <Hero />
            <OurSevices />
            <div className="why__us mb-2" id="whyUs">
                <div className="container py-5">
                    <div className="title_section">
                        <p className="font__heading__2">Why Us?</p>
                        <p className="font__size__14 mb-4">Mengapa harus pilih Binar Car Rental?</p>
                    </div>

                    <div className="row">
                        <WhyUs image='./images/why-us/icon_complete.svg' title="Mobil Lengkap" description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"/>
                        <WhyUs image='./images/why-us/icon_price.svg' title="Harga Murah" description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"/>
                        <WhyUs image='./images/why-us/icon_24hrs.svg' title="Layanan 24 Jam" description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"/>
                        <WhyUs image='./images/why-us/icon_professional.svg' title="Sopir Professional" description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"/>
                    </div>
                </div>
            </div>

            <div className="testimonial mb-4" id="testimonial">
                <div className="conatiners">
                    <div className="d-flex align-items-center flex-column mb-4">
                        <h1 className="font__size__24 fw-bold mb-2">Testimonial</h1>
                        <p className="font__size__14 px-3">Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <Testimonials />
                </div>
            </div>

            <Banner />

            <div className="py-5" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="font__size__24 mb-2"><strong> Frequently Asked Question</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </div>

                        <div className="col-lg-6">
                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <FAQ
                                heading="flush-headingOne"
                                colapse="flush-collapseOne"
                                colapseTarget="#flush-collapseOne"
                                faq="Apa saja syarat yang dibutuhkan?"
                                />
                                <FAQ
                                heading="flush-headingTwo"
                                colapse="flush-collapseTwo"
                                colapseTarget="#flush-collapseTwo"
                                faq="Berapa hari minimal sewa mobil lepas kunci?"
                                />
                                <FAQ
                                heading="flush-headingThree"
                                colapse="flush-collapseThree"
                                colapseTarget="#flush-collapseThree"
                                faq="Berapa hari sebelumnya sabaiknya booking sewa mobil?"
                                />
                                <FAQ
                                heading="flush-headingFour"
                                colapse="flush-collapseFour"
                                colapseTarget="#flush-collapseFour"
                                faq="Apakah Ada biaya antar-jemput?"
                                />
                                <FAQ
                                heading="flush-headingFive"
                                colapse="flush-collapseFive"
                                colapseTarget="#flush-collapseFive"
                                faq="Bagaimana jika terjadi kecelakaan"
                                />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default LandingPage
