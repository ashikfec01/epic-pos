import { Unit } from "@/@domain/types/Unit";
import { environment } from "@/environments/environment";
import { request } from "@/api/request";


const APP_URL = `${environment.apiUrl}`

export const getUnitList = async () => {
    try {
      const data = await request<Unit[]>('get', `${APP_URL}/units`);
      console.log(data)
      return data
    } catch (error) {
      return error;
    }
  }