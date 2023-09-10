import { Warehouse } from '@/@domain/types/Warehouse';
import { request } from '@/api/request';
import { environment } from '@/environments/environment';
import { WarehouseParams } from '@/interface/product/WarehouseParams';


const APP_URL = `${environment.apiUrl}`
export const getWarehouseList = async () => {
  try {
    const data = await request<Warehouse[]>('get', `${APP_URL}/warehouses`);
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
}

export const addWarehouseList = async (payload: any) => {
  try {
    const data = await request<WarehouseParams>('post', `${APP_URL}/warehouses`, payload);
    console.log(data)
    return data;
  } catch (error) {
    return error;
  }
}

// export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
