import { createLazyFileRoute } from '@tanstack/react-router'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import imageCar from '../../assets/img_car.png'
import { getDetailCars } from '../../service/car'
import { getTransmissions } from '../../service/transmission'
import { getModel } from '../../service/model'
import { getFuels } from '../../service/fuel'
import { getType } from '../../service/Types'
import { getManufacture } from '../../service/Manufacture'


export const Route = createLazyFileRoute('/detailcars/$id')({
  component: detailcars,
})

function detailcars() {
    const { id } = Route.useParams()
    const [cars, setCars] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [plate, setPlate] = useState('')
    const [manufacture, setManufacture] = useState([])
    const [manufacture_id, setManufacture_id] = useState(0)
    const [model, setModel] = useState([])
    const [model_id, setModel_id] = useState(0)
    const [rentPerDay, setRentPerDay] = useState('')
    const [capacity, setCapacity] = useState('')
    const [description, setDescription] = useState('')
    const [availableAt, setAvailableAt] = useState('')
    const [transmission, setTransmission] = useState([])
    const [transmission_id, setTransmission_id] = useState(0)
    const [available, setAvailable] = useState('')
    const [type, setType] = useState([])
    const [type_id, setType_id] = useState(0)
    const [year, setYear] = useState('')
    const [options, setOptions] = useState('')
    const [specs, setSpecs] = useState('')
    const [fuels, setFuels] = useState([])
    const [fuel_id, setFuel_id] = useState(0)
    const [image, setImage] = useState('')
    const [isNotFound, setIsNotFound] = useState(false)

  
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const [
                manufactureData,
                modelData,
                transmissionData,
                typeData,
                fuelsData,
                carDetailData,
                ] = await Promise.all([
                getManufacture(),
                getModel(),
                getTransmissions(),
                getType(),
                getFuels(),
                id ? getDetailCars(id) : Promise.resolve(null),
                ])
        
                if (manufactureData?.success) setManufacture(manufactureData.data)
                if (modelData?.success) setModel(modelData.data)
                if (transmissionData?.success) setTransmission(transmissionData.data)
                if (typeData?.success) setType(typeData.data)
                if (fuelsData?.success) setFuels(fuelsData.data)
        
                if (carDetailData) {
                if (carDetailData.success) {
                    setPlate(carDetailData.data?.plate)
                    setManufacture_id(carDetailData.data?.manufacture_id)
                    setModel_id(carDetailData.data?.model_id)
                    setRentPerDay(carDetailData.data?.rentPerDay)
                    setCapacity(carDetailData.data?.capacity)
                    setDescription(carDetailData.data?.description)
                    setAvailableAt(carDetailData.data?.availableAt)
                    setTransmission_id(carDetailData.data?.transmission_id)
                    setAvailable(carDetailData.data?.available)
                    setType_id(carDetailData.data?.type_id)
                    setYear(carDetailData.data?.year)
                    setOptions(carDetailData.data?.options)
                    setSpecs(carDetailData.data?.specs)
                    setFuel_id(carDetailData.data?.fuel_id)
                    setImage(carDetailData.data?.image)
                    setIsNotFound(false)
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    setIsNotFound(true)
                }
                }
            } catch (error) {
                console.error('Error fetching data:', error)
                setIsNotFound(true)
            }
        } 
        fetchData()
    }, [id]);

    const cetakHasil = () => {
        if (!cars || cars.length === 0) {
            return <p>No cars available.</p>;
        }
        
        return(
            <React.Fragment>
            <p>Plate: {plate || "N/A"}</p>
            <Image src={image} alt="Car" fluid />
            <p>Model: {model || "N/A"}</p>
            <p>Rent Per Day: {rentPerDay ? `Rp ${rentPerDay}` : "N/A"}</p>
            <p>Capacity: {capacity || "N/A"}</p>
            <p>Description: {description || "N/A"}</p>
            <p>
                Available At:{" "}
                {availableAt
                ? new Date(availableAt).toLocaleDateString("id-ID")
                : "N/A"}
            </p>
            <p>Options: {options?.join(", ") || "N/A"}</p>
            <p>Specs: {specs?.join(", ") || "N/A"}</p>
            <p>Fuels : {fuels}</p>
            <p>Manufacture : {manufacture}</p>
            <p>Type : {type}</p>
            <p>Transmission : {transmission}</p>
            <p>Year : {year}</p>
            </React.Fragment>
        );
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
                  <b>Sewa & Rental Mobil Terbaik di kawasan Jember!</b>
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
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
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
        ></div>
        <div
          className="container"
          style={{
            marginTop: '-40px',
            marginBottom: '30px',
            position: 'relative',
            zIndex: 2,
            width: '75%',
          }}
        >
            <div className="card" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
                {cetakHasil()}
            </div>
        </div>
      </>
    )
  }