const searchBar = ()=>{

    return(
        <section className="search__box">
            <div class="search__content">
                <div className="input-group d-flex flex-column pe-2">
                    <p>Tipe Driver</p>
                    <select className="form-select" id="driver" required>
                        <option className="item" value="" selected hidden>
                            Pilih Tipe Driver
                        </option>
                        <option className="item" value="true">Dengan Sopir</option>
                        <option className="item" value="false">
                            Tanpa Sopir (Lepas Kunci)
                        </option>
                        </select>
                </div>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Tanggal</p>
                    <input className="form-control" id="date" name="date" placeholder="Pilih Tanggal" type="date"/>
                </div>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Waktu Jemput/Ambil</p>
                    <input className="form-control" id="time" name="time" placeholder="Disabled input" type="time"/>
                </div>
                <div className="input-group d-flex flex-column pe-2">
                    <p>Jumlah Penumpang(optional)</p>
                    <input className="form-control" id="capacity" type="number" placeholder="Jumlah Penumpang"/>
                </div>
                <button  className="btn btn-search" id="searchBtn">
                    Cari Mobil
                </button>
            </div>
        </section>
    )
}

export default searchBar;