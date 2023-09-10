import { environment } from '@/environments/environment';
import type {LoginParams, LoginResult, LogoutParams, LogoutResult} from '../interface/user/login';

import {request} from './request';
const APP_URL = `${environment.apiUrl}`
export const apiLogin = (data: LoginParams) => request<LoginResult>('post', `${APP_URL}/auth/signin`, data);

export const apiLogout = (data: LogoutParams) => request<LogoutResult>('post', '/user/logout', data);
