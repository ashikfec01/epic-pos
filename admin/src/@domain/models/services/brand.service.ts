
import { Brand } from '@/@domain/types/Brand';
import { request } from '@/api/request';
import { environment } from '@/environments/environment';
import { BrandParams } from '@/interface/product/BrandParams';


const APP_URL = `${environment.apiUrl}`

export const getBrandList = async () => {
  try {
    const data = await request<Brand[]>('get', `${APP_URL}/brands`);
    console.log(data)
    return data
  } catch (error) {
    return error;
  }
}
export const addBrand = async (payload: BrandParams) => {
  try {
    const data = await request<BrandParams>('post', `${APP_URL}/brands`, payload);
    // console.log({addBrand:data})
    return data
  } catch (error) {
    return error;
  }
}

// export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
