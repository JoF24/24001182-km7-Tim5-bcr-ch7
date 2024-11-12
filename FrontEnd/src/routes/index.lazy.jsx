import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from '@tanstack/react-router';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { getManufacture } from '../service/Manufacture'
import ManufactureItem from '../components/Manufacture/ManufactureItem'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const { token,user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const hasShownToast = useRef(false);
  const [successMessage, setSuccessMessage] = useState(location.state?.successMessage || null);
  const [manufacture, setManufacture] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getManufactureData = async () => {
      setIsLoading(true)
      const result = await getManufacture()
      if (result.success) {
        setManufacture(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getManufactureData()
    }
  }, [token])

  useEffect(() => {
    if (successMessage && !hasShownToast.current) {
        toast.success(successMessage);
        setSuccessMessage(null);
        history.replaceState({ ...location.state, successMessage: null }, "");
        hasShownToast.current = true;
    }
  }, [successMessage]);

  return (
    <>
      <Row className="mt-4">
        {user?.role_id === 1 && (
          <>
            <div className="d-flex justify-content-end mb-3">
              <Button as={Link} to="/manufacture/create" variant="primary" size="md">
                + Tambah Data
              </Button>
            </div>
          </>                                        
        )}
        
        {!token && (
          navigate({ to: "/login" })
        )}

        {isLoading ? (
          <h1>Loading....</h1>
        ) : manufacture.length === 0 ? (
          <h1>Manufacture data is not found !</h1>
        ) : (
          manufacture.length > 0 &&
          manufacture.map((manufacture) => (
            <ManufactureItem manufacture={manufacture} key={manufacture?.id} />
          ))
        )}
      </Row>
    </>
  )
}
