import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from '@tanstack/react-router';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { getType } from "../service/Types";
import TypeItem from '../components/Type/TypeItem'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Route = createLazyFileRoute('/type')({
  component: Type,
})

function Type() {
  const { token,user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();
  const hasShownToast = useRef(false);
  const [successMessage, setSuccessMessage] = useState(location.state?.successMessage || null);
  const [type, setType] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getTypeData = async () => {
      setIsLoading(true)
      const result = await getType()
      if (result.success) {
        setType(result.data)
      }
      setIsLoading(false)
    }

    if (token) {
      getTypeData()
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
              <Button as={Link} to="/types/create" variant="primary" size="md">
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
        ) : type.length === 0 ? (
          <h1>Type data is not found !</h1>
        ) : (
          type.length > 0 &&
          type.map((type) => (
            <TypeItem type={type} key={type?.id} />
          ))
        )}
      </Row>
    </>
  )
}
