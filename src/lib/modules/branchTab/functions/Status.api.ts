import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { updateStatusInterface } from "typescript/interfaces/updateStatus.interface"

interface propsType{
    branchId?: number;
    availabilityStatusBySuperAdmin?: boolean;
    superAdminAvailabilityStatusExpiry?: string
}

export const updateStatusButton = async (props: propsType) => {
    const res = await axiosInstance.post<updateStatusInterface>(
        endpoints.brances.update, (
        {
            "branchId": props.branchId,
            "availabilityStatusBySuperAdmin": props.availabilityStatusBySuperAdmin,
            "superAdminAvailabilityStatusExpiry": "2024-02-16T12:30:00.000Z"
        }
    )
    )
    console.log('resUpdateStatus', res);
    return res
    
}