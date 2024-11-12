import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from '@tanstack/react-router'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { getTransmissions } from '../service/transmission'
import TransmissionItem from '../components/Transmission/TransmissionItem'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/transmissions')({
  component: Transmission,
})

function Transmission() {
  const { token, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  const hasShownToast = useRef(false)
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || null,
  )
  const [transmissions, setTransmissions] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTransmissionData = async () => {
      setIsLoading(true)
      const result = await getTransmissions()
      if (result.success) {
        setTransmissions(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getTransmissionData()
    }
  }, [token])

  useEffect(() => {
    if (successMessage && !hasShownToast.current) {
      toast.success(successMessage)
      setSuccessMessage(null)
      history.replaceState({ ...location.state, successMessage: null }, '')
      hasShownToast.current = true
    }
  }, [successMessage])

  return (
    <>
      <Row className="mt-4">
        {user?.role_id === 1 && (
          <>
            <div className="d-flex justify-content-end mb-3">
              <Button
                as={Link}
                to="/transmission/create"
                variant="primary"
                size="md"
              >
                + Tambah Data
              </Button>
            </div>
          </>
        )}

        {!token && navigate({ to: '/login' })}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : transmissions.length === 0 ? (
          <h1>Transmission data is not found !</h1>
        ) : (
          transmissions.length > 0 &&
          transmissions.map((transmission) => (
            <TransmissionItem
              transmission={transmission}
              key={transmission?.id}
            />
          ))
        )}
      </Row>
    </>
  )
}

export default Transmission
