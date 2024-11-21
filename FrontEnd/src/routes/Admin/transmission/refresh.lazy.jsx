import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/Admin/transmission/refresh')({
  component: () => RefreshTransmission(),
})

function RefreshTransmission() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/Admin/transmissions',
        state: { successMessage: 'Data Transmission berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/Admin/transmissions' })
    }
  }, [location.state])

  return null
}
