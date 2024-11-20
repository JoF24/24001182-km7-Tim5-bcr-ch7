import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { toast } from 'react-toastify'
import {
  getDetailManufacture,
  updateManufacture,
} from '../../../service/Manufacture'
import Protected from '../../../components/Auth/Protected'

export const Route = createLazyFileRoute('/Admin/manufacture/edit/$id')({
  component: () => (
    <Protected roles={[1]}>
      <EditManufacture />
    </Protected>
  ),
})

function EditManufacture() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

  const [manufacture, setManufacture] = useState('')
  const [address, setAddress] = useState('')
  const [isNotFound, setIsNotFound] = useState(false)

  useEffect(() => {
    const getDetailManufactureData = async (id) => {
      const result = await getDetailManufacture(id)
      if (result?.success) {
        setManufacture(result.data?.manufacture)
        setAddress(result.data?.address)
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
      }
    }

    if (id) {
      getDetailManufactureData(id)
    }
  }, [id])

  if (isNotFound) {
    navigate({ to: '/' })
    return
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      manufacture,
      address,
    }
    const result = await updateManufacture(id, request)
    if (result?.success) {
      navigate({
        to: `/`,
        state: { successMessage: 'Data Manufacture berhasil diperbarui !!' },
      })
      return
    }

    toast.error(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">
            Edit Manufacture Data With ID {id}
          </Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="manufacture">
                <Form.Label column sm={3}>
                  Manufacture
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Input Manufacture Here"
                    required
                    value={manufacture}
                    onChange={(event) => {
                      setManufacture(event.target.value)
                    }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="address">
                <Form.Label column sm={3}>
                  Address
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Input Address Here"
                    required
                    value={address}
                    onChange={(event) => {
                      setAddress(event.target.value)
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
                      disabled={!manufacture || !address}
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
