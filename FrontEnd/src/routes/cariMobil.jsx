import { createFileRoute } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import imageCar from '../assets/img_car.png';
import { getCars } from '../service/car';
import CarsItem2 from '../components/Cars/CarsItem2';

export const Route = createFileRoute('/cariMobil')({
  component: CariMobil,
});

function CariMobil() {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState('');
  const [capacity, setCapacity] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      const result = await getCars();
      if (result.success) {
        setCars(result.data);
      }
      setIsLoading(false);
    };

    fetchCars();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredCars = cars.filter(car => {
      const carCapacity = parseInt(car.capacity, 10);
      const selectedCapacity = parseInt(capacity, 10);
      
      const carDate = car.availableAt ? new Date(car.availableAt).toISOString().split("T")[0] : "";
      const selectedDate = date;
      
      const isDateMatch = (carDate === selectedDate);
      const isCapacityMatch = (carCapacity >= selectedCapacity);

      return isDateMatch && isCapacityMatch;
    });

    setCars(filteredCars);
  };

  return (
    <>
      <div style={{ backgroundColor: '#f1f3ff', marginRight: '0' }}>
        <Container>
          <Row>
            <Col
              style={{
                margin: '20px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1
                style={{
                  fontSize: '36px',
                  lineHeight: '45px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                }}
              >
                <b>Sewa & Rental Mobil Terbaik di kawasan Bandar Lampung!</b>
              </h1>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  marginTop: '15px',
                  marginRight: '90px',
                  textAlign: 'justify',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                }}
              >
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </Col>
            <Col>
              <Image src={imageCar} alt="Car" fluid />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="container"
        style={{ marginTop: '-40px', marginBottom: '30px', position: 'relative', zIndex: 2, width: '75%' }}
      >
        <div
          className="card"
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              <div className="col" style={{ fontSize: '14px' }}>
                <label>Tanggal</label>
                <input
                  type="date"
                  className="form-control"
                  style={{ fontSize: '12px' }}
                  placeholder="Pilih Tanggal"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="col" style={{ fontSize: '14px' }}>
                <label>Jumlah Penumpang</label>
                <select
                  className="form-select"
                  style={{ fontSize: '12px' }}
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                >
                  <option hidden>Pilih Kapasitas Penumpang</option>
                  <option value="1">1 orang</option>
                  <option value="2">2 orang</option>
                  <option value="3">3 orang</option>
                  <option value="4">4 orang</option>
                  <option value="5">5 orang</option>
                  <option value="6">6 orang</option>
                  <option value="7">7 orang</option>
                  <option value="8">8 orang</option>
                </select>
              </div>

              <div className="col-auto">
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#60bc5c',
                    fontSize: '14px',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <b>Cari Mobil</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Container>
        <Row>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : cars.length === 0 ? (
            <h1>Car data is not found!</h1>
          ) : (
            cars.map((car) => <CarsItem2 cars={car} key={car?.id} />)
          )}
        </Row>
      </Container>
    </>
  );
}
