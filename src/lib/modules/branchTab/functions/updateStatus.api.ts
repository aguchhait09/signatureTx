import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"

interface statusInterface{
    updateStat?: string
}

export const statusUpdate = async () => {
    const res = await axiosInstance.post<statusInterface>(
        endpoints.brances.update, {
        availabilityStatusBySuperAdmin: false,
        branchId: 19,
        superAdminAvailabilityStatusExpiry: ""
    }
    )
    console.log('update', res);
    return res
    
}