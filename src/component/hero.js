import imageCar from './../assets/img_car.svg'

const hero = ()=> {
    return (
        <div id="hero" className="hero bg__grey">
            <div className="container">
            <div className="row justify-content-around">
                <div className="col-lg-6 mt-5 hero-content">
                    <h1 className="font__heading__1">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <p className="font__size__14" style={{ width: '80%'}}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <button className="btn btn-success">Mulai Sewa Mobil</button>
                </div>

                <div className="col-lg-6 justify-content-end">
                <img src={imageCar} alt="car" className="img-hero" style={{ right: 0 }} width="121%" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default hero;
