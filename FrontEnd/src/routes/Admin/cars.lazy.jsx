import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from '@tanstack/react-router'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { getCars } from '../../service/car'
import CarsItem from '../../components/Cars/CarsItem'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/Admin/cars')({
  component: Index,
})

function Index() {
  const { token, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  const hasShownToast = useRef(false)
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || null,
  )
  const [cars, setCars] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCarsData = async () => {
      setIsLoading(true)
      const result = await getCars()
      if (result.success) {
        setCars(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getCarsData()
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
              <Button as={Link} to="/Admin/car/create" variant="primary" size="md">
                + Tambah Data
              </Button>
            </div>
          </>
        )}

        {!token && navigate({ to: '/login' })}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : cars.length === 0 ? (
          <h1>Car data is not found !</h1>
        ) : (
          cars.length > 0 &&
          cars.map((cars) => <CarsItem cars={cars} key={cars?.id} />)
        )}
      </Row>
    </>
  )
}
