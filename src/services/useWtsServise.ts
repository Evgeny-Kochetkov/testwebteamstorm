import { useHttp } from "../hooks/useHttp"; 

export const useWtsServise = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://donmagnate.backend.wtsdemo.ru/'

    const postLogDataUser = async (data: any) => {
        const res = await request(`${_apiBase}api/login`, 'POST', data)
        return res
    }

    return {loading, error, clearError, postLogDataUser}
}