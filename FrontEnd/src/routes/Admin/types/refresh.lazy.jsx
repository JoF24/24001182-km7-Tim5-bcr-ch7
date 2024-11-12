import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useLocation } from '@tanstack/react-router';
import { useEffect } from 'react'

export const Route = createLazyFileRoute('/types/refresh')({
  component: () => RefreshType(),
})


function RefreshType(){
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.state?.successMessage) {
            navigate({ 
                to: "/type",
                state: { successMessage: "Data Type berhasil dihapus !!" }
             });
        }else{
            navigate({ to: "/type" });
        }
    }, [location.state]);

    return;
}
