import axios, { AxiosResponse } from 'axios';

// Definir el tipo de 'user' para el registro
export interface User {
  username: string;
  region: string;
  comuna: string;
  rut: string;
  email: string;
  password: string;
  //confirmPassword: string;
  //termsAndConds: boolean;
}

// Configuración base de la URL
axios.defaults.baseURL = 'http://localhost:4000/api';

// Tipo de respuesta esperado de la solicitud de registro
interface RegisterResponse {
  message: string;
  // Aquí puedes agregar más propiedades dependiendo de la respuesta que espere tu backend.
}

// Función de registro con tipado
export const registerRequest = (user: User): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post<RegisterResponse>('/auth/register', user);
}

export const testRequest = (): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post<RegisterResponse>('/auth/test');
}