import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/Admin/manufacture/refresh')({
  component: () => RefreshManufacture(),
})

function RefreshManufacture() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/Admin/manufactures',
        state: { successMessage: 'Data Manufacture berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/Admin/manufactures' })
    }
  }, [location.state])

  return
}
