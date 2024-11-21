import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/Admin/types/refresh')({
  component: () => RefreshType(),
})

function RefreshType() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    if (location.state?.successMessage) {
      navigate({
        to: '/Admin/type',
        state: { successMessage: 'Data Type berhasil dihapus !!' },
      })
    } else {
      navigate({ to: '/Admin/type' })
    }
  }, [location.state])

  return
}
