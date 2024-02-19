import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { PharmaBranchCount } from "typescript/interfaces/pharmacyBranchCount.interface"

interface propsInterface {
    pharmacyId?: string
}

export const branchCountApi = async (props: propsInterface) => {
    const res = await axiosInstance.post<PharmaBranchCount>(
        endpoints.pharmacy.branchCount, {
        id: props?.pharmacyId
    }
    )
    console.log('branchCout', res)
    return res?.data
}