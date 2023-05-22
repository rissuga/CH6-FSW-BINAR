import { React, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatedFilteredCars } from '../../features/car/carSlice'
import Swal from 'sweetalert2'

const FindCarForm = () => {
  const filteredCars = useSelector(state => state.counter.filteredCars)
  const url = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json'
  const [cars, setCars] = useState([])
  const [capacity, setCapacity] = useState([])
  const [date, setDate] = useState([])
  const [time, setTime] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => {
      setCars(data); dispatch(updatedFilteredCars(data))
    })
  }, [dispatch])

  const formatDate = (dateStr) => {
    const newDateTime = new Date(dateStr)
    const epochTime = newDateTime.getTime()
    return epochTime
  }

  const handleFindCar = () => {
    const dateTimefilter = new Date(`${date} ${time}`)
    const epochTime = dateTimefilter.getTime()
    const filterResult = cars.filter((i) => i.capacity >= capacity && formatDate(i.availableAt) >= epochTime)
    if (!date || !time || !capacity) {
      Swal.fire({
        icon: 'error',
        scrollbarPadding: false,
        timer: 1500,
        title: 'Form belum lengkap!',
        text: 'Silahkan input semua form.'
      })
      return
    }
    dispatch(updatedFilteredCars(filterResult))
  }

  return (
        <div>
            <section className="search__box">
                <div className="search__content">
                    <div className="input-group d-flex flex-column pe-2">
                        <p>Tipe Driver</p>
                        <select className="form-select" id="driver" required>
                            <option className="item" value="" hidden>
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
                        <input className="form-control" id="date" name="date" placeholder="Pilih Tanggal" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="input-group d-flex flex-column pe-2">
                        <p>Waktu Jemput/Ambil</p>
                        <input className="form-control" id="time" name="time" placeholder="Disabled input" type="time" value={time} onChange={(e) => setTime(e.target.value)}/>
                    </div>
                    <div className="input-group d-flex flex-column pe-2">
                        <p>Jumlah Penumpang(optional)</p>
                        <input className="form-control" id="capacity" type="number" placeholder="Jumlah Penumpang" value={capacity} onChange={(e) => setCapacity(e.target.value)}/>
                    </div>
                    <button className="btn btn-search" id="searchBtn" onClick={handleFindCar}>
                        Cari Mobil
                    </button>
                </div>
            </section>

            <div className="container result-container">
                    <div className="result d-flex" id="cars-container">
                        {filteredCars.map((car) =>
                            <div key={car.id} className="col-lg-3 col-md-3 col-sm-12 mx-1 ">
                                <div className="card mx-0 my-4 g-0" style={{ width: '18rem', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}>
                                    <img src={car.image} className="card-img-top img-fluid" alt={car.manufacture} style={{ height: '195px', borderRadius: '3px', objectFit: 'cover' }} />
                                    <div className="card-body" style={{ fontSize: '14px' }}>
                                        <p className="card-title">{car.manufacture} {car.model}</p>
                                        <p className="fw-bold">Rp {car.rentPerDay} / hari</p>
                                        <p className="card-text" style={{ height: '90px' }}>{car.description}</p>
                                        <div className="my-2"><i className="bi bi-people me-2"></i>{car.capacity} Orang</div>
                                        <div className="my-2"><i className="bi bi-gear me-2"></i>{car.transmission}</div>
                                        <div className="my-2"><i className="bi bi-calendar4 me-2"></i>{car.year}</div>
                                        <a href="/#" className="btn btn-success text-white w-100 mt-2 fw-bold mt-4 " style={{ fontSize: '14px' }}>Pilih Mobil</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
  )
}

export default FindCarForm
