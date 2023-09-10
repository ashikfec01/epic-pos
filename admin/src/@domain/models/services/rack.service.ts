import { Rack } from "@/@domain/types/Rack";
import { request } from "@/api/request";
import { environment } from "@/environments/environment";


const APP_URL = `${environment.apiUrl}`

export const getRackList = async () => {
    try {
        const data = await request<Rack[]>('get', `${APP_URL}/racks`);
        console.table(data)
        return data;
    } catch (error) {
        return error
    }
}