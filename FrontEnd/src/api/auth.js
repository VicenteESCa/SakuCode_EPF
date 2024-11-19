import axios, { AxiosResponse } from 'axios';

// Definir el tipo de 'user' para el registro
interface User {
  userName: string;
  region: string;
  comuna: string;
  rut: {
    valid: boolean;
    value: string;
  };
  email: {
    valid: boolean;
    value: string;
  };
  password: {
    valid: boolean;
    value: string;
  };
  confirmPassword: {
    valid: boolean;
    value: string;
  };
  termsAndConds: boolean;
}

// Configuración base de la URL
axios.defaults.baseURL = 'http://localhost:8100/api';

// Tipo de respuesta esperado de la solicitud de registro
interface RegisterResponse {
  message: string;
  // Aquí puedes agregar más propiedades dependiendo de la respuesta que espere tu backend.
}

// Función de registro con tipado
export const registerRequest = (user: User): Promise<AxiosResponse<RegisterResponse>> => {
  return axios.post<RegisterResponse>('/auth/register', user);
}
