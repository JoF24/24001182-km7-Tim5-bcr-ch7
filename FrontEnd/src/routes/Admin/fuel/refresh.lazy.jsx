import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/fuel/refresh')({
  component: () => RefreshFuel(),
})

function RefreshFuel() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/fuels',
        state: { successMessage: 'Data Fuel berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/fuels' })
    }
  }, [location.state])

  return null
}
