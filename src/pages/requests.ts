import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  //   timeout: 5000,
});

type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>("/login", data);
  return response.data;
}
