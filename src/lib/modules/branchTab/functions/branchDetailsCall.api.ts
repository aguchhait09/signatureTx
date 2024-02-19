import endpoints from "config/endpoints.config"
import { axiosInstance } from "request"
import { branchInfoInterface } from "typescript/interfaces/branchInfo.interface"

interface propsInterface{
    id?: string
}

export const branchInfoApi = async(props: propsInterface)=>{
    const res = await axiosInstance.get<branchInfoInterface>(
        endpoints.brances.branchDetails(props.id)
    )
    return res?.data
}