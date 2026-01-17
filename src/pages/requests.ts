import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
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
