import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createFuel } from '../../service/fuel'
import Protected from '../../components/Auth/Protected'
import Container from 'react-bootstrap/esm/Container'

export const Route = createLazyFileRoute('/fuel/create')({
  component: () => (
    <Protected roles={[1]}>
      <CreateFuel />
    </Protected>
  ),
})

function CreateFuel() {
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [price, setPrice] = useState('')
  const [octan_rating, setOctanRating] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      price: parseFloat(price),
      octan_rating: parseInt(octan_rating, 10),
    }

    const result = await createFuel(request)
    if (result?.success) {
      navigate({ to: '/fuels',
        state: { successMessage: "Data berhasil ditambahkan!" }
       })
      return
    }

    alert(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/fuels' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <div className="text-center mb-3">
          <h3>Add New Fuel</h3>
        </div>
        <Card>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="type">
                <Form.Label column sm={3}>
                  Fuel Type
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Input Fuel Type"
                    required
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm={3}>
                  Price
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Input Price"
                    required
                    value={price}
                    onChange={(event) => {
                      setPrice(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="octane_rating">
                <Form.Label column sm={3}>
                  Octane Rating
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="number"
                    placeholder="Input Octane Rating"
                    required
                    value={octan_rating}
                    onChange={(event) => {
                      setOctanRating(event.target.value)
                    }}
                  />
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
                      disabled={!type || !price || !octan_rating}
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

export default CreateFuel;