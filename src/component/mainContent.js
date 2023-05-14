import Hero from "./hero";
import OurSevices from "./ourServices";
import WhyUs from "./whyUs";
import iconComplete from "./../assets/why-us/icon_complete.svg";
import iconPrice from "./../assets/why-us/icon_price.svg";
import iconHours from "./../assets/why-us/icon_24hrs.svg";
import iconProfessional from "./../assets/why-us/icon_professional.svg";


const mainContent = ()=>{
    return(
        <div>
            <Hero />
            <OurSevices />
            <div className="why__us mb-2" id="whyUs">
                <div className="container py-5">
                    <div class="title_section">
                        <p class="font__heading__2">Why Us?</p>
                        <p class="font__size__14 mb-4">Mengapa harus pilih Binar Car Rental?</p>
                    </div>

                    <div className="row">
                        <WhyUs image={iconComplete} title="Mobil Lengkap" description="Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"/>
                        <WhyUs image={iconPrice} title="Harga Murah" description="Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"/>
                        <WhyUs image={iconHours} title="Layanan 24 Jam" description="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu"/>
                        <WhyUs image={iconProfessional} title="Sopir Professional" description="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"/>
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default mainContent;
