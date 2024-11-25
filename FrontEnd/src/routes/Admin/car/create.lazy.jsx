import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { getTransmissions } from '../../../service/transmission'
import { getModel } from '../../../service/model'
import { getFuels } from '../../../service/fuel'
import { getType } from '../../../service/Types'
import { getManufacture } from '../../../service/Manufacture'
import { createCars } from '../../../service/car'
import Protected from '../../../components/Auth/Protected'
import Container from 'react-bootstrap/esm/Container'

export const Route = createLazyFileRoute('/Admin/car/create')({
  component: () => (
    <Protected roles={[1]}>
      <CreateCars />
    </Protected>
  ),
})

function CreateCars() {
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
  const [transmission_id, setTreansmission_id] = useState(0)
  const [available, setAvailable] = useState('')
  const [type, setType] = useState([])
  const [type_id, setType_id] = useState(0)
  const [year, setYear] = useState('')
  const [options, setOptions] = useState('')
  const [specs, setSpecs] = useState('')
  const [fuels, setFuels] = useState([])
  const [fuel_id, setFuel_id] = useState(0)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const getManufactureData = async () => {
      const result = await getManufacture()
      if (result?.success) {
        setManufacture(result?.data)
      }
    }
    const getModelData = async () => {
      const result = await getModel()
      if (result?.success) {
        setModel(result?.data)
      }
    }
    const getTransmissionData = async () => {
      const result = await getTransmissions()
      if (result?.success) {
        setTransmission(result?.data)
      }
    }
    const getTypeData = async () => {
      const result = await getType()
      if (result?.success) {
        setType(result?.data)
      }
    }
    const getFuelsData = async () => {
      const result = await getFuels()
      if (result?.success) {
        setFuels(result?.data)
      }
    }

    getManufactureData()
    getModelData()
    getTransmissionData()
    getTypeData()
    getFuelsData()
  }, [])

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
      image,
    }

    const result = await createCars(request)
    if (result?.success) {
      navigate({
        to: '/Admin/cars',
        state: { successMessage: 'Data Car berhasil ditambahkan!!' },
      })
      return
    }

    alert(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/Admin/cars' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <div className="text-center mb-3">
          <h3>Add New Car</h3>
        </div>
        <Card>
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
                    onChange={(event) => setManufacture_id(event.target.value)}
                  >
                    <option disabled selected>
                      Select Manufacture
                    </option>
                    {manufacture.length > 0 &&
                      manufacture.map((manufacture) => (
                        <option key={manufacture?.id} value={manufacture?.id}>
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
                    onChange={(event) => setModel_id(event.target.value)}
                  >
                    <option disabled selected>
                      Select Model
                    </option>
                    {model.length > 0 &&
                      model.map((model) => (
                        <option key={model?.id} value={model?.id}>
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
                    type="date" // Mengubah tipe menjadi date
                    placeholder="Select Available At" // Placeholder otomatis digantikan oleh UI date picker, tetapi bisa ditulis untuk fallback
                    required
                    value={availableAt}
                    onChange={(event) => {
                      setAvailableAt(event.target.value); // Mengambil nilai dalam format YYYY-MM-DD
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
                    onChange={(event) =>
                      setTreansmission_id(event.target.value)
                    }
                  >
                    <option disabled selected>
                      Select Transmission
                    </option>
                    {transmission.length > 0 &&
                      transmission.map((transmission) => (
                        <option key={transmission?.id} value={transmission?.id}>
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
                    onChange={(event) => setType_id(event.target.value)}
                  >
                    <option disabled selected>
                      Select Type
                    </option>
                    {type.length > 0 &&
                      type.map((type) => (
                        <option key={type?.id} value={type?.id}>
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
                    type="array"
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
                    type="array"
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
                        <option key={fuels?.id} value={fuels?.id}>
                          {fuels?.type}
                        </option>
                      ))}
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(event) => setImage(event.target.files[0])}
                />
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
                        !fuel_id ||
                        !image
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
