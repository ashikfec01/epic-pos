import { Category } from "@/@domain/types/Category";
import { request } from "@/api/request";
import { environment } from "@/environments/environment";



const APP_URL = `${environment.apiUrl}`

export const getCategoryList = async () => {
    try {
      const data = await request<Category[]>('get', `${APP_URL}/categories`);
      console.log(data)
      return data
    } catch (error) {
      return error;
    }
  }