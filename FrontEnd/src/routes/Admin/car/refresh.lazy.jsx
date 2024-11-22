import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/Admin/car/refresh')({
  component: () => RefreshCars(),
})

function RefreshCars() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/',
        state: { successMessage: 'Data Car berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/' })
    }
  }, [location.state])

  return
}
