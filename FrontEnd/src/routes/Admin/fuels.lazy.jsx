import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from '@tanstack/react-router'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { getFuels } from '../service/fuel'
import FuelItem from '../components/Fuel/FuelItem'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/fuels')({
  component: Fuel,
})

function Fuel() {
  const { token, user } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  const hasShownToast = useRef(false)
  const [successMessage, setSuccessMessage] = useState(
    location.state?.successMessage || null,
  )
  const [fuels, setFuels] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getFuelData = async () => {
      setIsLoading(true)
      const result = await getFuels()
      if (result.success) {
        setFuels(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getFuelData()
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
              <Button as={Link} to="/fuel/create" variant="primary" size="md">
                + Tambah Data
              </Button>
            </div>
          </>
        )}

        {!token && navigate({ to: '/login' })}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : fuels.length === 0 ? (
          <h1>Fuel data is not found !</h1>
        ) : (
          fuels.length > 0 &&
          fuels.map((fuel) => <FuelItem fuel={fuel} key={fuel?.id} />)
        )}
      </Row>
    </>
  )
}

export default Fuel
