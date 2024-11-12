import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/transmission/refresh')({
  component: () => RefreshTransmission(),
})

function RefreshTransmission() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/',
        state: { successMessage: 'Data Transmission berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/' })
    }
  }, [location.state])

  return null
}
