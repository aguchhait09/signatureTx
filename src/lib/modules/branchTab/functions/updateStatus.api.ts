import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"

export const statusUpdate = async () => {
    const res = await axiosInstance.post(
        endpoints.brances.update, {
        availabilityStatusBySuperAdmin: false,
        branchId: 19,
        superAdminAvailabilityStatusExpiry: "2024-02-15T12:30:00.000Z"
    }
    )
    console.log('update', res);
    return res
    
}