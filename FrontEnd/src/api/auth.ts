import axios, { AxiosResponse } from 'axios';

// Definir el tipo de 'user' para el registro
export interface UserSignUp {
  username: string;
  rut: string;
  email: string;
  password: string;
  region: string;
  comuna: string;
}
// Configuración base de la URL
axios.defaults.baseURL = 'http://localhost:4000/api';

export interface UserSignIn {
  email: string;
  password:string;
}
// interface RegisterResponse {
//   message: string;
//   // Aquí puedes agregar más propiedades dependiendo de la respuesta que espere tu backend.
// }

// Función de registro con tipado
export const registerRequest = (user: UserSignUp): Promise<AxiosResponse<any>> => {
  return axios.post<any>('/auth/register', user);
}

export const loginRequest = (userIn: UserSignIn): Promise<AxiosResponse<any>> =>{
  return axios.post<any>('/auth/login', userIn)
}
  