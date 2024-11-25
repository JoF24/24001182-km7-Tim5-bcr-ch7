import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { toast } from 'react-toastify'
import { getTransmissions } from '../../../../service/transmission'
import { getModel } from '../../../../service/model'
import { getFuels } from '../../../../service/fuel'
import { getType } from '../../../../service/Types'
import { getManufacture } from '../../../../service/Manufacture'

import { getDetailCars, updateCars } from '../../../../service/car'
import Protected from '../../../../components/Auth/Protected'

export const Route = createLazyFileRoute('/Admin/car/edit/$id')({
  component: () => (
    <Protected roles={[1]}>
      <EditCars />
    </Protected>
  ),
})

function EditCars() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

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
  const [newImage, setnewImage] = useState(undefined)
  const [isNotFound, setIsNotFound] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
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
          } else {
            setIsNotFound(true)
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsNotFound(true)
      }
    }

    fetchData()
  }, [id])

  if (isNotFound) {
    navigate({ to: '/Admin/cars' })
    return
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      plate,
      manufacture_id,
      model_id,
      rentPerDay,
      capacity,
      description,
      availableAt,
      transmission_id,
      available,
      type_id,
      year,
      options,
      specs,
      fuel_id,
      newImage,
    }
    const result = await updateCars(id, request)
    if (result?.success) {
      navigate({
        to: `/Admin/cars`,
        state: { successMessage: 'Data Car berhasil diperbarui !!' },
      })
      return
    }

    toast.error(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/Admin/cars' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">
            Edit Car Data With ID {id}
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="plate">
                <Form.Label column sm={3}>
                  Plate
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="string"
                    placeholder="Input Plate"
                    required
                    value={plate}
                    onChange={(event) => {
                      setPlate(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="manufacture_id">
                <Form.Label column sm={3}>
                  Manufacture
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setManufactureId(event.target.value)}
                  >
                    <option disabled selected>
                      Select Manufacture
                    </option>
                    {manufacture.length > 0 &&
                      manufacture.map((manufacture) => (
                        <option
                          key={manufacture?.id}
                          value={manufacture?.id}
                          selected={manufacture.id == manufacture_id}
                        >
                          {manufacture?.manufacture}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="model_id">
                <Form.Label column sm={3}>
                  Model Name
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setModelId(event.target.value)}
                  >
                    <option disabled selected>
                      Select Model
                    </option>
                    {model.length > 0 &&
                      model.map((model) => (
                        <option
                          key={model?.id}
                          value={model?.id}
                          selected={model.id == model_id}
                        >
                          {model?.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="rentPerDay">
                <Form.Label column sm={3}>
                  Rent Per Day
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Input Rent Per Day"
                    required
                    value={rentPerDay}
                    onChange={(event) => {
                      setRentPerDay(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="capacity">
                <Form.Label column sm={3}>
                  Capacity
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Input Capacity"
                    required
                    value={capacity}
                    onChange={(event) => {
                      setCapacity(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="description">
                <Form.Label column sm={3}>
                  Description
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="string"
                    placeholder="Input Description"
                    required
                    value={description}
                    onChange={(event) => {
                      setDescription(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="availableAt">
                <Form.Label column sm={3}>
                  Available At
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="date"
                    placeholder="Select Available At"
                    required
                    value={availableAt ? new Date(availableAt).toISOString().split("T")[0] : ""}
                    onChange={(event) => {
                      setAvailableAt(event.target.value);
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="transmission_id">
                <Form.Label column sm={3}>
                  Transmission
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setTransmissionId(event.target.value)}
                  >
                    <option disabled selected>
                      Select Transmission
                    </option>
                    {transmission.length > 0 &&
                      transmission.map((transmission) => (
                        <option
                          key={transmission?.id}
                          value={transmission?.id}
                          selected={transmission.id == transmission_id}
                        >
                          {transmission?.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="available">
                <Form.Label column sm={3}>
                  Available
                </Form.Label>
                <Col sm="9">
                  <Form.Check
                    type="radio"
                    label="True"
                    value="true"
                    checked={available === 'true'}
                    onChange={(event) => {
                      setAvailable(event.target.value)
                    }}
                  />
                  <Form.Check
                    type="radio"
                    label="False"
                    value="false"
                    checked={available === 'false'}
                    onChange={(event) => {
                      setAvailable(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="type_id">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setTypeId(event.target.value)}
                  >
                    <option disabled selected>
                      Select Type
                    </option>
                    {type.length > 0 &&
                      type.map((type) => (
                        <option
                          key={type?.id}
                          value={type?.id}
                          selected={type.id == type_id}
                        >
                          {type?.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="year">
                <Form.Label column sm={3}>
                  Year
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Input Year"
                    required
                    value={year}
                    onChange={(event) => {
                      setYear(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="options">
                <Form.Label column sm={3}>
                  Options
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="string"
                    placeholder="Input Options"
                    required
                    value={options}
                    onChange={(event) => {
                      setOptions(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="specs">
                <Form.Label column sm={3}>
                  Specs
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="string"
                    placeholder="Input Specs"
                    required
                    value={specs}
                    onChange={(event) => {
                      setSpecs(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="fuel_id">
                <Form.Label column sm={3}>
                  Fuel Type
                </Form.Label>
                <Col sm="9">
                  <Form.Select
                    aria-label="Default select example"
                    onChange={(event) => setFuel_id(event.target.value)}
                  >
                    <option disabled selected>
                      Select Fuel
                    </option>
                    {fuels.length > 0 &&
                      fuels.map((fuels) => (
                        <option
                          key={fuels?.id}
                          value={fuels?.id}
                          selected={fuels.id == fuel_id}
                        >
                          {fuels?.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="CarsPicture">
                <Form.Label column sm={3}>
                  Cars Picture
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="file"
                    placeholder="Choose File"
                    onChange={(event) => {
                      setnewImage(event.target.files[0])
                      setImage(URL.createObjectURL(event.target.files[0]))
                    }}
                    accept=".jpg,.png"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="CarsPicture">
                <Form.Label column sm={3}></Form.Label>
                <Col sm={9}>
                  <Image src={image} fluid />
                </Col>
              </Form.Group>
              <Container>
                <Row>
                  <Col className="d-flex justify-content-center gap-2">
                    <Button variant="outline-primary" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={
                        !plate ||
                        !manufacture_id ||
                        !model_id ||
                        !rentPerDay ||
                        !capacity ||
                        !description ||
                        !availableAt ||
                        !transmission_id ||
                        !available ||
                        !type_id ||
                        !year ||
                        !options ||
                        !specs ||
                        !fuel_id
                      }
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Card.Body>
        </Card>
      </Col>
      <Col md={3}></Col>
    </Row>
  )
}
