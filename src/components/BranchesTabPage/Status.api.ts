import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { updateStatusInterface } from "typescript/interfaces/updateStatus.interface"


export const updateStatusButton = async () => {
    const res = await axiosInstance.post<updateStatusInterface>(
        endpoints.brances.update, (
        {
            "branchId": 4993,
            "availabilityStatusBySuperAdmin": false,
            "superAdminAvailabilityStatusExpiry": "2024-02-16T12:30:00.000Z"
        }
    )
    )
    console.log('resUpdateStatus', res);
    return res
    
}