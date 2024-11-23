import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { toast } from 'react-toastify'
import { getDetailModel, updateModel } from '../../../../service/model'
import Protected from '../../../../components/Auth/Protected'

export const Route = createLazyFileRoute('/Admin/model/edit/$id')({
  component: () => (
    <Protected roles={[1]}>
      <EditModel />
    </Protected>
  ),
})

function EditModel() {
  const { id } = Route.useParams()
  const navigate = useNavigate()

  const [type, setType] = useState('')
  const [year, setYear] = useState('')
  const [isNotFound, setIsNotFound] = useState(false)

  useEffect(() => {
    const getDetailModelData = async (id) => {
      const result = await getDetailModel(id)
      if (result?.success) {
        setType(result.data?.type)
        setYear(result.data?.year)
        setIsNotFound(false)
      } else {
        setIsNotFound(true)
      }
    }

    if (id) {
      getDetailModelData(id)
    }
  }, [id])

  if (isNotFound) {
    navigate({ to: '/models' })
    return
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const request = {
      type,
      year,
    }
    const result = await updateModel(id, request)
    if (result?.success) {
      navigate({
        to: `/models`,
        state: { successMessage: 'Data Model berhasil diperbarui !!' },
      })
      return
    }

    toast.error(result?.message)
  }

  const handleCancel = () => {
    navigate({ to: '/models' })
    return
  }

  return (
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Card>
          <Card.Header className="text-center">
            Edit Model Data With ID {id}
          </Card.Header>
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
