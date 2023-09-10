import { Manufacturer } from "@/@domain/types/Manufacturer";
import { request } from "@/api/request";
import { environment } from "@/environments/environment";



const APP_URL = `${environment.apiUrl}`

export const getManufacturerList = async () => {
    try {
      const data = await request<Manufacturer[]>('get', `${APP_URL}/manufacturers`);
      console.log(data)
      return data
    } catch (error) {
      return error;
    }
  }