import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { createModel } from '../../../service/model'
import Protected from '../../../components/Auth/Protected'
import Container from 'react-bootstrap/esm/Container'

export const Route = createLazyFileRoute('/Admin/model/create')({
  component: () => (
    <Protected roles={[1]}>
      <CreateModel />
    </Protected>
  ),
})

function CreateModel() {
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [year, setYear] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      year,
    }

    const result = await createModel(request)
    if (result?.success) {
      navigate({
        to: '/Admin/models',
        state: { successMessage: 'Data Model berhasil ditambahkan!!' },
      })
      return
    }

    alert(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/Admin/models' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <div className="text-center mb-3">
          <h3>Add New Model</h3>
        </div>
        <Card>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="type">
                <Form.Label column sm={3}>
                  Type
                </Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="text"
                    placeholder="Input Type"
                    required
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value)
                    }}
                  />
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
              <Container>
                <Row>
                  <Col className="d-flex justify-content-center gap-2">
                    <Button variant="outline-primary" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={!type || !year}
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
